<script>
	import { min, max } from '../stores/modstore';
	let player;
	let volume = 50;
	let paused = true;

	function handleClick() {
		if (paused) {
			setVolume();
			player.play();
			rollMod();
		}
	}

	function setVolume() {
		player.volume = volume / 100;
	}

	function rollMod() {
		setTimeout(() => {
			// rolls in range of [min, max]
			const num = Math.floor(Math.random() * ($max - $min + 1) + $min);
			console.log(num);

			// highlight user name here
		}, 3000);
	}
</script>

<div class="roll-container">
	<button on:click={handleClick}>ROLL</button>
	<div class="volume-container">
		<span>Drum Roll Volume: {volume}%</span>
		<input type="range" min="0" max="100" bind:value={volume} on:change={setVolume} />
	</div>
	<audio src="drumroll.mp3" bind:paused bind:this={player} />
</div>

<style>
	button {
		padding: 1rem;
	}
	input {
		margin: 1rem;
	}
	.roll-container {
		display: flex;
		flex-direction: column;
		width: 26rem;
	}
	.volume-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>
