<script>
	import { users, count, min, max } from '../../stores/modstore';
	import ModBox from './ModBox.svelte';

	let styled = '';
	$: {
		// used for styling the grid
		const rowsLg = Math.ceil($count / 5);
		const rowsMd = Math.ceil($count / 3);
		styled = `--rows-lg: ${rowsLg}; --rows-md: ${rowsMd};`;
	}
</script>

<!-- Temp for debugging -->
<span>Count: {$count}</span>
<span>Min: {$min} - Max: {$max}</span>
<div style={styled}>
	{#each $users as user (user.num)}
		<ModBox {...user} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-gap: 1rem;
	}

	@media screen and (min-width: 650px) {
		div {
			display: grid;
			/* grid-template-columns: repeat(3, 1fr); */
			grid-template-rows: repeat(var(--rows-md), 1fr);
			grid-auto-flow: column;
			grid-gap: 1rem;
		}
	}
	@media screen and (min-width: 1100px) {
		div {
			display: grid;
			grid-template-rows: repeat(var(--rows-lg), 1fr);
			grid-auto-flow: column;
			grid-gap: 1rem;
		}
	}
</style>
