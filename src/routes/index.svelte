<script context="module">
	export const prerender = true;
</script>

<script>
	import { min, max } from '$store/modstore';
	import Counter from '$lib/counter/Counter.svelte';
	import RollButton from '$lib/RollButton.svelte';
	import ModContainer from '$lib/modbox/ModContainer.svelte';
	import PubSub from '$lib/socket/PubSub.svelte';
	// chat box for calling chat dumb when they pick already taken number "what an idiot!"
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Rolly for Le Mod</h1>

	<PubSub />
	<h2>Edit the numbers below to adjust the quantity</h2>
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
		align-items: center;
		flex: 1;
		color: #d1d0c5;
	}

	h1 {
		width: 100%;
		color: #d1d0c5;
	}

	h2 {
		color: #d1d0c5;
	}

	.counters {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
