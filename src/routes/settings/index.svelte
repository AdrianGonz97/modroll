<script context="module">
	export async function load({ session }) {
		const { jwt } = session;
		let isConnected = !!jwt;
		return {
			props: { isConnected },
		};
	}
</script>

<script>
	import { generateState } from './state';
	import { onMount } from 'svelte';

	export let isConnected;
	let url;
	let username = 'Twitch Username here';

	onMount(() => {
		const baseUrl = window.location.host;
		let state = generateState();
		localStorage.setItem('state', state);
		url =
			`https://id.twitch.tv/oauth2/authorize` +
			`?client_id=63qvaq2ihoklqle1qc96gqa8290su5` +
			`&redirect_uri=https://${baseUrl}/login` +
			`&response_type=code` +
			`&scope=bits:read+channel:manage:redemptions+channel:read:redemptions+user:read:email` +
			`&force_verify=true` +
			`&state=${state}`;
	});

	async function createReward() {}

	async function logout() {
		const resp = await fetch('/api/revoke', { method: 'POST' });
		console.log(await resp.json());
		window.location.reload();
	}
</script>

{#if isConnected}
	<span class="connection">Connected as: {username}</span>
	<button on:click={logout}>Disconnect from Twitch</button>
{:else}
	<a class="connection" href={url}>Connect to Twitch</a>
{/if}
<div class="settings-container">
	<form>
		<label>
			Channel Reward Name:
			<input
				type="text"
				placeholder="ex. Modroll"
				on:submit={createReward}
			/>
			<button on:click={createReward}>Create Reward</button>
		</label>
		<label>
			Bits Goal Minimum:
			<input
				type="text"
				placeholder="ex. Modroll"
				on:submit={createReward}
			/>
			<button on:click={createReward}>Create Reward</button>
		</label>
		<label>
			Channel Reward Name:
			<input
				type="text"
				placeholder="ex. Modroll"
				on:submit={createReward}
			/>
			<button on:click={createReward}>Create Reward</button>
		</label>
	</form>
</div>

<style>
	.settings-container {
		display: grid;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.connection,
	a {
		padding: 1rem 2rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		text-align: center;
	}
	a:hover {
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
		text-decoration: none;
		transition: all 0.1s ease;
	}
	form {
		display: grid;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
