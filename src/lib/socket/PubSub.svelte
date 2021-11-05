<script>
	import { onMount, onDestroy } from 'svelte';
	import {
		activeRewards,
		activeRewardNames,
		activeRewardIds,
		bitAmount,
	} from '$store/userstore';
	import { users, min, max } from '$store/modstore';
	let socket, id, atoken, url, topics, pingTimeout, pongTimeout;
	let canConnect = false;

	$: console.log($activeRewardNames, $activeRewardIds, $bitAmount);

	onMount(async () => {
		try {
			const resp = await fetch('/api/pubsub');
			const data = await resp.json();
			id = data.userId;
			atoken = data.token;

			// validate id and token here
			if (id && atoken) {
				canConnect = true;
				url = 'wss://pubsub-edge.twitch.tv';
				topics = [
					`channel-bits-events-v2.${id}`,
					`channel-points-channel-v1.${id}`,
				];
			}
		} catch (err) {
			console.log(err);
		}
	});

	async function connect() {
		if (!canConnect) {
			alert(
				'You must connect a twitch account before using this feature! This can be done in the settings page.'
			);
			window.location.href = '/settings';
		}
		try {
			const resp = await fetch('/api/reward/get');
			if (resp.ok) {
				const data = await resp.json();
				console.log(data);
				activeRewards.set(
					data.rewards.filter((reward) => reward.isActive)
				);
			}
		} catch (err) {
			console.log('Cannot get user rewards');
		}

		socket = new WebSocket(url);

		socket.onopen = (e) => {
			const body = {
				type: 'LISTEN',
				data: {
					topics,
					auth_token: atoken,
				},
			};
			socket.send(JSON.stringify(body));
			console.log('ws connected!');
			pingTimeout = sendPing(socket);
		};

		socket.onmessage = (e) => {
			const resp = JSON.parse(e.data);
			console.log(resp);
			if (resp.type === 'PONG') {
				clearTimeout(pongTimeout);
				pingTimeout = sendPing(socket);
			} else if (resp.type === 'MESSAGE') {
				const data = JSON.parse(resp.data.message);
				console.log(data);
				if (data.type === 'reward-redeemed') {
					// validates the message is a valid number
					const name = data.data.redemption.user.display_name;
					const msg = data.data.redemption.user_input;
					const rewardId = data.data.redemption.reward.id;
					const redemptionId = data.data.redemption.id;

					// if the reward id matches any active reward ids
					const isValidReward = (id) => id === rewardId;

					if (
						$activeRewardIds.some(isValidReward) &&
						!isNaN(msg) &&
						parseInt(msg) >= $min &&
						parseInt(msg) <= $max &&
						$users.get(parseInt(msg)) === ''
					) {
						console.log(`Setting user ${name} to number ${msg}`);
						users.set($users.set(parseInt(msg), name));
					} else {
						// if the number is taken or invalid
						console.log(
							`User ${name} input: ${msg} is invalid. Refunding.`
						);
						refundUser(redemptionId, rewardId);
					}
				} else if (data.type === 'MESSAGE') {
					const {
						user_name: name,
						bits_used: cost,
						chat_message: msg,
					} = data.data.message.data;
					const parsedMsg = msg.split();
					// can't refund bits so do nothing if invalid
					if (
						$bitAmount !== null &&
						$bitAmount !== -1 &&
						cost >= $bitAmount &&
						!isNaN(msg) &&
						parseInt(msg) >= min &&
						parseInt(msg) <= max &&
						$users.get(msg) === ''
					) {
						$users.set(msg, name);
					} else {
						console.log('User input is invalid');
					}
				}
			}
		};

		socket.onerror = (e) => {
			console.error('An error has occurred: ', e);
		};

		socket.onclose = (e) => {
			console.log('WS is now closed');
		};
	}

	function sendPing(socket) {
		// start pinging here
		return setTimeout(() => {
			const body = {
				type: 'PING',
			};
			socket.send(JSON.stringify(body));
			pongTimeout = setTimeout(() => {
				reconnect();
			}, 10000); // send reconnect cmd if pong doesnt arrive in 10sec
		}, 1000 * 60 * 1 + Math.floor(Math.random() * 1000 * 60 * 3)); // 1 min default with a random time between +0-3 mins
	}

	function reconnect() {
		console.log('Reconnecting ws...');
		const body = {
			type: 'RECONNECT',
		};
		socket.send(JSON.stringify(body));
	}

	function close() {
		socket.close();
		clearTimeout(pingTimeout);
		clearTimeout(pongTimeout);
		socket = null;
	}

	async function refundUser(id, rewardId) {
		const resp = await fetch('/api/reward/refund', {
			method: 'POST',
			body: JSON.stringify({
				id,
				rewardId,
			}),
		});
		if (resp.ok) {
			console.log('User has had their points refunded');
		}
	}

	onDestroy(() => {
		if (socket) socket.close();
		clearTimeout(pingTimeout);
		clearTimeout(pongTimeout);
	});
</script>

<div class="container">
	<div class="btn-con">
		<span>Automate Modroll:</span>
		{#if socket}
			<button on:click={close}>Stop</button>
		{:else}<button on:click={connect}>Start</button>{/if}
	</div>
	{#if socket}
		<div class="watching-text">
			<span class="txt"
				>Reward Name:
				{#if $activeRewardNames.length === 0}
					<b class="inactive">No active rewards</b>
				{:else}
					<b>{$activeRewardNames.join(', ')}</b>
				{/if}</span
			>
			<span class="txt"
				>Bit Amount: <b
					class={$bitAmount === -1 || $bitAmount === null
						? 'inactive'
						: ''}
					>{$bitAmount === -1 || $bitAmount === null
						? 'No active'
						: $bitAmount} bits</b
				></span
			>
		</div>
	{/if}
</div>

<style>
	button {
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.watching-text {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-auto-flow: column;
		grid-gap: 0.5rem;
		/* flex-direction: column; */
		/* justify-content: left; */
		/* gap: 0.5rem; */
	}
	.txt {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-auto-flow: row;
		/* grid-gap: 0.5rem; */
	}
	.container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	span {
		display: flex;
		justify-content: space-evenly;
		text-align: left;
	}
	.btn-con {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
	}
	b {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: aquamarine;
		padding: 0 1rem;
		margin: 0 0.5rem;
		text-align: center;
	}
	.inactive {
		background-color: rgb(255, 127, 127);
	}
</style>
