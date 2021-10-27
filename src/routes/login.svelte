<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(async () => {
		const code = $page.query.get('code');
		console.log(code);

		const resp = await fetch('/api/auth', {
			method: 'POST',
			headers: { Accept: 'application/json' },
			body: JSON.stringify({ code }),
		});

		const data = await resp.json();

		if (resp.ok) {
			console.log(data);
			// cookie and redirect
		} else {
			throw new Error(data);
		}
	});
</script>

<h2>Processing...</h2>

<style>
	h2 {
		text-align: center;
	}
</style>
