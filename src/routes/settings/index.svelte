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

	async function logout() {
		const resp = await fetch('/api/revoke', { method: 'POST' });
		console.log(await resp.json());
		window.location.reload();
	}

	async function createReward() {}
</script>

{#if isConnected}
	<span class="connection">Connected as: {username}</span>
	<button on:click={logout}>Disconnect from Twitch</button>
{:else}
	<a class="connection" href={url}>Connect to Twitch</a>
{/if}
<div class="settings-container">
	<span
		>Form inputs labeled with a <span class="required">*</span> are required.</span
	>
	<form>
		<div class="form-group">
			<span class="group-name">Channel Point Reward:</span>
			<label>
				<span><span class="required">*</span> Reward Name:</span>
				<input
					type="text"
					placeholder="ex. Modroll"
					on:submit={createReward}
				/>
			</label>
			<label>
				<span><span class="required">*</span> Point Cost:</span>
				<input
					type="number"
					placeholder="ex. 50000"
					on:submit={createReward}
				/>
			</label>
			<label>
				Description
				<textarea
					type="text"
					placeholder="ex. Pick a number between 1-50 for a chance of mod"
					on:submit={createReward}
				/>
			</label>
			<button on:click={createReward}>Create Reward</button>
		</div>
		<div class="form-group">
			<span class="group-name">Bits:</span>
			<label>
				Minimum Cost:
				<input
					type="number"
					placeholder="ex. 5000"
					on:submit={createReward}
				/>
			</label>
			<button on:click={createReward}>Save Amount</button>
		</div>
		<div class="form-group">
			<span class="group-name">Connected To Reward:</span>
			<label>
				Channel Reward Name:
				<input
					type="text"
					placeholder="ex. Modroll"
					on:submit={createReward}
				/>
			</label>
			<button on:click={createReward}>Create Reward</button>
		</div>
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
		grid-template-columns: repeat(2, 1fr);
		grid-auto-flow: row;
		grid-gap: 1rem;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	.form-group {
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.group-name {
		font-weight: bold;
		text-align: center;
	}
	.required {
		color: red;
	}

	textarea {
		width: 16rem;
		height: 5rem;
	}
</style>
