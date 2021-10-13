<script>
	import { spring } from 'svelte/motion';
	export let num;
	export let name;
</script>

<div class="name-container">
	<span>{num}</span>
	<input aria-label="Username" placeholder="Empty" bind:value={name} />
</div>

<style>
	.name-container {
		display: grid;
		grid-template-columns: 1fr 5fr;
		grid-auto-rows: 2rem;
		grid-gap: 0.2rem;
	}
	input {
		width: 10rem;
	}
	span {
		text-align: center;
		padding-top: 0.4rem;
	}
</style>
