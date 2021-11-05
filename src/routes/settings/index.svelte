<script context="module">
	import _load from './_loader';
	export const load = _load;
</script>

<script>
	// if connected, check to see if there are any rewards that have already been created by this tool via twitch api
	import SettingsForm from '$lib/settings/SettingsForm.svelte';
	import { generateState } from './state';
	import { onMount } from 'svelte';
	import { user } from '$store/userstore';

	export let userInfo;
	export let isConnected;
	export let rewards = [];
	let url;

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

		user.set(userInfo);
	});

	async function logout() {
		const resp = await fetch('/api/oauth/revoke', { method: 'POST' });
		if (resp.ok) console.log(await resp.json());
		localStorage.clear();
		window.location.reload();
	}
</script>

{#if isConnected}
	{#if $user.displayName}
		<span class="connection">Connected as: <b>{$user.displayName}</b></span>
	{:else}
		<span class="connection">...</span>
	{/if}
	<button on:click={logout}>Disconnect from Twitch</button>
{:else}
	<a class="connection" href={url}>Connect to Twitch</a>
{/if}
<SettingsForm {rewards} />

<style>
	.connection,
	a {
		padding: 1rem 2rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		text-align: center;
		background-color: rgba(0, 0, 0, 0.1);
		margin: 1rem 0 0 0;
	}
	a:hover {
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
		text-decoration: none;
		transition: all 0.25s ease;
		background-color: var(--text-color);
		color: var(--primary-color);
	}
	b {
		font-size: 1.1rem;
		color: var(--accent-color);
	}

	button {
		background-color: rgba(0, 0, 0, 0.1);
		border: none;
		color: var(--text-color);
		padding: 0.4rem 0;
	}
	button:hover {
		background-color: var(--text-color);
		color: var(--primary-color);
		transition: all 0.25s ease;
		cursor: pointer;
	}
</style>
