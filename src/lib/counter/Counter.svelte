<script>
	import { spring } from 'svelte/motion';
	export let count;
	export let label;

	const displayed_count = spring();
	$: displayed_count.set($count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n, m) {
		return n % m;
	}

	function decrement(num) {
		return num - 1 < 1 ? 1 : --num;
	}

	function increment(num) {
		return num + 1 > 999 ? 999 : ++num;
	}
</script>

<div class="container">
	<div>{label}</div>
	<div class="counter">
		<button
			on:click={() => ($count = decrement($count))}
			aria-label="Decrease the counter by one"
		>
			<svg aria-hidden="true" viewBox="0 0 1 1">
				<path d="M0,0.5 L1,0.5" />
			</svg>
		</button>

		<div class="counter-viewport">
			<div
				class="counter-digits"
				style="transform: translate(0, {100 * offset}%)"
			>
				<input
					style="top: -100%"
					aria-hidden="true"
					value={Math.floor($displayed_count + 1)}
				/>
				<input type="number" bind:value={$count} />
			</div>
		</div>

		<button
			on:click={() => ($count = increment($count))}
			aria-label="Increase the counter by one"
		>
			<svg aria-hidden="true" viewBox="0 0 1 1">
				<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
			</svg>
		</button>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 1rem;
	}

	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		color: var(--text-color);
		font-size: 1rem;
	}

	.counter button:hover {
		background-color: var(--secondary-color);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: var(--text-color);
	}

	.counter-viewport {
		width: 5em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	input {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--accent-color);
		font-size: 2.5rem;
		align-items: center;
		justify-content: center;
	}

	input {
		background-color: transparent;
		border: none;
		text-align: center;
	}

	/* Removes number arrows Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	button {
		cursor: pointer;
	}

	@media (min-width: 475px) {
		input {
			font-size: 3rem;
		}
		.counter button {
			font-size: 2rem;
		}
	}
</style>
