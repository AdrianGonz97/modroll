<script>
	import ModBox from './ModBox.svelte';
	import { boxes, count, rollCount } from '$store/modstore';
	import { currentMod, pastMods, users } from '$store/modstore';
	import { activeRewardNames, bitAmount } from '$store/userstore';
	import { onMount, onDestroy } from 'svelte';

	let saveInterval; // used for intervally saving the user list
	onMount(() => {
		saveInterval = setInterval(() => {
			users.set($users);
		}, 5000);
	});
	onDestroy(() => {
		clearInterval(saveInterval);
	});

	let styled = '';
	$: {
		// used for styling the grid
		const rowsLg = Math.ceil($count / 5);
		const rowsMd = Math.ceil($count / 3);
		styled = `--rows-lg: ${rowsLg}; --rows-md: ${rowsMd};`;
	}

	function clearNames() {
		if (confirm('Are you really sure you want to clear ALL the NAMES?')) {
			if (
				confirm('OK, yeah. But seriously though, ARE YOU REALLY SURE?')
			) {
				console.log('Clearing all names');
				localStorage.removeItem('userList');
				window.location.reload();
			}
		}
	}
</script>

<div class="container">
	<div class="stats">
		<span>Roll <strong>#{$rollCount}</strong></span>
		<span>Current Mod: <strong>{$currentMod}</strong></span>
		<span>
			Past Winners: [{#each $pastMods as modName}
				&nbsp;<strong>{modName}</strong>
			{/each}
			]
		</span>
		<button class="clear" on:click={clearNames}>Clear All</button>
		<div class="how">
			<span class="tit">Enter with:</span>
			<span class="instructions"
				>Channel Reward: <strong>{$activeRewardNames.join(', ')}</strong
				></span
			>
			<span class="instructions"
				>Bits (1 entry only): <strong>{$bitAmount} bits</strong></span
			>
		</div>
	</div>
	<div class="con" style={styled}>
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

	.con {
		padding-bottom: 1rem;
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
		/* background-color: var(--tertiary-color); */
		background-color: rgba(0, 0, 0, 0.2);
	}

	span {
		font-size: 1.25rem;
		text-align: center;
	}

	.stats {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		position: relative;
	}

	strong {
		color: var(--accent-color);
	}

	.tit {
		text-decoration: underline;
	}

	.clear {
		position: absolute;
		top: 0;
		left: 35rem;
		width: 6rem;
		padding: 0.25rem 1rem;
		cursor: pointer;
		border: none;
	}

	.how {
		position: absolute;
		top: 0;
		left: -24rem;
		display: flex;
		flex-direction: column;
		min-width: 340px;
	}

	.instructions {
		text-align: left;
	}

	.clear:hover {
		background-color: var(--text-color);
		transition: all 0.25s ease;
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
