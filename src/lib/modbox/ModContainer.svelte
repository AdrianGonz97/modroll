<script>
	import { boxes, count, rollCount } from '../../stores/modstore';
	import { currentMod, pastMods } from '../../stores/modstore';
	import ModBox from './ModBox.svelte';

	let styled = '';
	$: {
		// used for styling the grid
		const rowsLg = Math.ceil($count / 5);
		const rowsMd = Math.ceil($count / 3);
		styled = `--rows-lg: ${rowsLg}; --rows-md: ${rowsMd};`;
	}
</script>

<div class="container">
	<div class="stats">
		<span>Roll #{$rollCount}</span>
		<span>Current Mod: <strong>{$currentMod}</strong></span>
		<span>
			Past Winners: [{#each $pastMods as modName}
				&nbsp;<strong>{modName}</strong>
			{/each}
			]
		</span>
	</div>
	<div style={styled}>
		{#each $boxes as box (box.num)}
			<ModBox {...box} />
		{/each}
	</div>
</div>

<style>
	div {
		display: grid;
		grid-gap: 1rem;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-style: solid;
		border-width: 1px;
		border-radius: 20px;
		padding: 1.5rem;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
		background-color: var(--tertiary-color);
	}

	span {
		font-size: 1.25rem;
		text-align: center;
	}

	.stats {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}

	@media (min-width: 710px) {
		div {
			display: grid;
			/* grid-template-columns: repeat(3, 1fr); */
			grid-template-rows: repeat(var(--rows-md), 1fr);
			grid-auto-flow: column;
			grid-gap: 1rem;
		}
	}
	@media (min-width: 1150px) {
		div {
			display: grid;
			grid-template-rows: repeat(var(--rows-lg), 1fr);
			grid-auto-flow: column;
			grid-gap: 1rem;
		}
	}
</style>
