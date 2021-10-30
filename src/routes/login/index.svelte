<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let isLoading = true;

	onMount(async () => {
		const code = $page.query.get('code');
		const state = $page.query.get('state');

		if (state === localStorage.getItem('state')) {
			const resp = await fetch('/api/oauth/auth', {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: JSON.stringify({ code }),
			});

			if (resp.ok) {
				isLoading = false;
				window.location.href = '/settings';
			} else {
				window.location.href = '/';
			}
		} else {
		}
	});
</script>

{#if isLoading}
	<h2>Processing...</h2>
{:else}
	<h2>Connected!</h2>
{/if}

<style>
	h2 {
		text-align: center;
	}
</style>
