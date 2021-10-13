<script>
	import { spring } from 'svelte/motion';
	export let num;
</script>

<div class="name-container">
	<label>
		<span>{num}</span>
		<input name="text" aria-labelledby="Add todo" placeholder="Empty" />
	</label>
</div>

<style>
	input {
	}
	label {
	}
	span {
	}
</style>
