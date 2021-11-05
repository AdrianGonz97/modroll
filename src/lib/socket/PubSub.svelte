<script>
	// TODO: Have start button activate all rewards
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

	// activates all rewards and starts the WS
	function connect() {
		if (!canConnect) {
			alert(
				'You must connect a twitch account before using this feature! This can be done in the settings page.'
			);
			window.location.href = '/settings';
		}
		toggleRewards(true);
		startWS();
	}

	function startWS() {
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

					// check if it's a valid reward
					if ($activeRewardIds.some(isValidReward)) {
						if (
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
					}

				} else if (data.message_type === 'bits_event') {
					const {
						user_name: name,
						bits_used: cost,
						chat_message: msg,
					} = data.data;

					console.log(data.data);
					console.log(name, cost, msg);

					const regex = /([^ "]*\CHEER[^ "]*)/g; // removes all cheers
					const parsedMsg = msg.toUpperCase().replace(regex, '');
					const final = parsedMsg.replace(/\s/g, '');
					// checks if user already used bits before
					let alreadyUsedBits = false;
					$users.forEach((val, key, map) => {
						if (val === name + '-') alreadyUsedBits = true;
					});
					// can't refund bits so do nothing if invalid
					if (
						$bitAmount !== null &&
						$bitAmount !== -1 &&
						cost >= $bitAmount &&
						!isNaN(final) &&
						parseInt(final) >= $min &&
						parseInt(final) <= $max &&
						$users.get(parseInt(final)) === '' &&
						!alreadyUsedBits
					) {
						users.set($users.set(parseInt(final), name + '-'));
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
		if(socket) socket.close();
		clearTimeout(pingTimeout);
		clearTimeout(pongTimeout);
		socket = null;

		toggleRewards(false);
	}

	async function toggleRewards(isActive) {
		try {
			// disables all rewards
			const rewardsResp = await fetch('/api/reward/get');
			if (rewardsResp.ok) {
				const rewardsData = await rewardsResp.json();
				console.log(rewardsData);
				const rewardIds = rewardsData.rewards.map((reward) => reward.id);
				const bodies = rewardIds.map((id) => {
					return {
						rewardId: id,
						isActive,
					};
				});
				// disables all rewards to hide from users
				const promises = bodies.map(body => fetch('/api/reward/update', {
					method: 'POST', 
					body : JSON.stringify(body)
				}));

				const resp = await Promise.all(promises);
				if(resp.every(res => res.ok)) {
					const dataPromises = resp.map(result => result.json());
					const results = await Promise.all(dataPromises);
					
					// all rewards created by this app are now active
					activeRewards.set(
						rewardsData.rewards.filter((reward) => isActive)
					);
				}

			}
		} catch (err) {
			console.log('Cannot get user rewards');
		}
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
		// if (socket) socket.close();
		// clearTimeout(pingTimeout);
		// clearTimeout(pongTimeout);
		close(socket);
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
		padding: 0.3rem 2rem;
		cursor: pointer;
		border: none;
		background-color: rgba(0, 0, 0, 0.5);
		/* color: var(--text-color); */
		color: var(--accent-color);
		margin-left: 1rem;
	}
	button:hover {
		background-color: var(--text-color);
		color: black;
		transition: all 0.25s ease;
	}
	.watching-text {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-auto-flow: column;
		grid-gap: 0.5rem;
	}
	.txt {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-auto-flow: row;
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
		color: black;
	}
	.inactive {
		background-color: rgb(255, 127, 127);
	}
</style>
