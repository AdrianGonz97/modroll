<script context="module">
	// check if jwt exists and validate token
	export async function load({ fetch, session }) {
		const { jwt } = session;
		if (jwt) {
			const resp = await fetch('/api/oauth/validate');
			if (resp.ok) {
				console.log('Valid access token');
				return {
					props: { isConnected: true },
				};
			}
		}
		console.log('Invalid access token');
		return {
			props: { isConnected: false },
		};
	}
</script>

<script>
	// if connected, check to see if there are any rewards that have already been created by this tool via twitch api
	import SettingsForm from '$lib/settings/SettingsForm.svelte';
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
		const resp = await fetch('/api/oauth/revoke', { method: 'POST' });
		if (resp.ok) console.log(await resp.json());
		localStorage.clear();
		window.location.reload();
	}
</script>

{#if isConnected}
	<span class="connection">Connected as: {username}</span>
	<button on:click={logout}>Disconnect from Twitch</button>
{:else}
	<a class="connection" href={url}>Connect to Twitch</a>
{/if}
<SettingsForm />

<style>
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
</style>
