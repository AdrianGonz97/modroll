<script>
	import { onMount, onDestroy } from 'svelte';
	import { activeRewardIds } from '$store/userstore';
	let socket;
	let id;
	let atoken;
	let url;
	let topics;
	let canConnect = false;
	let pingTimeout;

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

	function connect() {
		if (!canConnect) {
			alert(
				'You must connect a twitch account before using this feature! This can be done in the settings page.'
			);
			window.location.href = '/settings';
		}
		socket = new WebSocket(url);

		socket.onopen = (e) => {
			const body = {
				type: 'LISTEN',
				// nonce: 'kjh1231288j',
				data: {
					topics,
					auth_token: atoken,
				},
			};
			socket.send(JSON.stringify(body));
			console.log('connected!');
			pingTimeout = sendPing(socket);
		};

		socket.onmessage = (e) => {
			const data = JSON.parse(e.data);
			console.log(data);
			if (data.type === 'PONG') pingTimeout = sendPing(socket);
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
		}, 1000 * 60 * 1); // 1 min
	}

	function close() {
		socket.close();
		clearTimeout(pingTimeout);
		socket = null;
	}

	onDestroy(() => {
		if (socket) socket.close();
		clearTimeout(pingTimeout);
	});
</script>

<div>
	<span>Automate:</span>
	{#if socket}
		<button on:click={close}>Disconnect</button>
	{:else}<button on:click={connect}>Connect</button>{/if}
</div>

<style></style>
