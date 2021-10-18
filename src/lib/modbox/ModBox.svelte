<script>
	import { afterUpdate, onDestroy } from 'svelte';
	import { users, winner } from '../../stores/modstore';
	export let num;
	export let name;

	$: if (name) {
		$users.set(num, name);
		// console.log('name changed:', num);
	}

	// hacky way to get around the inability to delete the last character
	function handleDelete(e) {
		if (e.key === 'Delete' || e.key === 'Backspace') {
			$users.set(num, '');
		}
	}

	afterUpdate(() => {
		const savedName = $users.get(num);
		if (savedName) {
			name = savedName;
			// console.log('saved name: ', savedName);
		} else {
			$users.set(num, '');
			// console.log('initializing: ', num);
		}
	});

	// uncomment if I want to delete from map and save memory,
	// but doesn't maintain the name when the modbox is destroyed
	// onDestroy(() => {
	// 	$users.delete(num);
	// 	console.log('destroyed:', num);
	// });
</script>

<div class={$winner.num === num ? 'winner' : 'name-container'}>
	<span>{num}</span>
	<input
		aria-label="Username"
		placeholder={''}
		bind:value={name}
		on:keydown={handleDelete}
	/>
</div>

<style>
	.name-container,
	.winner {
		display: grid;
		grid-template-columns: 1fr 5fr;
		grid-auto-rows: 2rem;
		grid-gap: 0.2rem;
		padding: 0.2rem;
	}
	.winner {
		color: white;
		background-color: #03ac13;
	}
	input {
		width: 10rem;
	}
	span {
		text-align: center;
		align-self: center;
		padding: 0.2rem;
	}
</style>
