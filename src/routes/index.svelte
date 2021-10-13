<script context="module">
	export const prerender = true;
</script>

<script>
	import { min, max } from '../stores/modstore';
	import Counter from '$lib/Counter.svelte';
	import RollButton from '$lib/RollButton.svelte';
	import ModContainer from '$lib/modbox/ModContainer.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<!-- <div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div> -->
		Mod Rolly Polly
	</h1>

	<h2>Edit the numbers below to adjust</h2>
	<div class="counters">
		<Counter count={min} label="Min Number" />
		<Counter count={max} label="Max Number" />
	</div>
	<RollButton />
	<ModContainer />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.counters {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	/* .welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
