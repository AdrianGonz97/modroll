<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let isLoading = true;

	onMount(async () => {
		const code = $page.query.get('code');
		const state = $page.query.get('state');
		console.log(code);
		console.log(state);

		const resp = await fetch('/api/auth', {
			method: 'POST',
			headers: { Accept: 'application/json' },
			body: JSON.stringify({ code }),
		});

		const data = await resp.json();

		if (resp.ok) {
			console.log(data);
			isLoading = false;
			// redirect
		} else {
			throw new Error(data);
			// redirect back
		}
	});
</script>

{#if isLoading}
	<h2>Processing...</h2>
{:else}
	<h2>Done!</h2>
{/if}

<style>
	h2 {
		text-align: center;
	}
</style>
