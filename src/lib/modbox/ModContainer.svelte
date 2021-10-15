<script>
	import { boxes, count, min, max } from '../../stores/modstore';
	import { currentMod, pastMods } from '../../stores/modstore';
	import ModBox from './ModBox.svelte';

	let styled = '';
	$: {
		// used for styling the grid
		const rowsLg = Math.ceil($count / 5);
		const rowsMd = Math.ceil($count / 3);
		styled = `--rows-lg: ${rowsLg}; --rows-md: ${rowsMd};`;
	}

	// $: modCount = $pastMods.length;
</script>

<!-- Temp for debugging -->
<!-- <span>Count: {$count}</span> -->
<!-- <span>Min: {$min} - Max: {$max}</span> -->
<span>Current Mod: {$currentMod}</span>
<span>Past Winners: {$pastMods[0]}, {$pastMods[1]}</span>
<div style={styled}>
	{#each $boxes as box (box.num)}
		<ModBox {...box} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-gap: 1rem;
		margin-top: 1rem;
	}

	@media (min-width: 650px) {
		div {
			display: grid;
			/* grid-template-columns: repeat(3, 1fr); */
			grid-template-rows: repeat(var(--rows-md), 1fr);
			grid-auto-flow: column;
			grid-gap: 1rem;
		}
	}
	@media (min-width: 1100px) {
		div {
			display: grid;
			grid-template-rows: repeat(var(--rows-lg), 1fr);
			grid-auto-flow: column;
			grid-gap: 1rem;
		}
	}
</style>
