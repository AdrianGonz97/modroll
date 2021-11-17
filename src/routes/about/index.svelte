<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is a quickly made <a href="https://kit.svelte.dev">SvelteKit</a> app
		that uses much of the styling from the default template since I can't make
		anything look pretty :). Svelte is great though, I highly recommend it.
	</p>

	<p>
		This app is a simplified version of the <a
			href="https://github.com/AdrianGonz97/auto-modroll"
			>Auto-Modroll Web App</a
		>. This app allows you to manually input any amount of usernames into a
		raffle. A drum roll is played during the selection process.
	</p>

	<p>
		The intention of this app is to randomly select users that have entered
		into the raffle for a chance of mod. The app can also be repurposed for
		just randomly drawing users for any reason.
	</p>

	<p>
		If you want to check out the code itself, <a
			href="https://github.com/AdrianGonz97/modroll"
			>here's a link to the github repository</a
		>.
	</p>

	<p>
		Inspired by
		<a href="https://github.com/TheFinie/frostprimemodroll">TheFinie's</a> original
		modroll app.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
	p,
	h1 {
		color: var(--text-color);
	}
</style>
