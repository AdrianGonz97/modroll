<script>
	import { users } from '../../stores/modstore';
	import ModBox from './ModBox.svelte';
</script>

<div>
	{#each $users as user (user.num)}
		<ModBox {...user} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
	}
</style>
