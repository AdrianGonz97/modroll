<script>
	import { afterUpdate, beforeUpdate, onDestroy } from 'svelte';
	import { users } from '../../stores/modstore';
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

	onDestroy(() => {
		// uncomment if I want to delete from map and save memory,
		// but doesn't maintain the name when the modbox is destroyed
		//$users.delete(num);
		console.log('destroyed:', num);
	});
</script>

<div class="name-container">
	<span>{num}</span>
	<input aria-label="Username" placeholder="Empty" bind:value={name} on:keydown={handleDelete} />
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
		align-self: center;
		padding: 0.2rem;
	}
</style>
