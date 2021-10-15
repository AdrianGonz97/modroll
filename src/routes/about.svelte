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
		This is a quickly made <a href="https://kit.svelte.dev">SvelteKit</a> app that uses much of the styling
		from the default template. Svelte is great, I highly recommend it.
	</p>

	<p>
		If you want to check out the code itself, <a href="https://github.com/AdrianGonz97/modroll"
			>here's a link to the github repository</a
		>.
	</p>

	<p>Still under constructing. Not mobile friendly yet. I'm not a web designer so it's ugly. :)</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
