<script>
	let player;
	let volume = 50;
	let paused = true;
	const handleClick = () => {
		if (paused) {
			player.play();
			// randomly pick the user here
		}
	};
	function setVolume() {}
</script>

<div class="roll-container">
	<button on:click={handleClick}>ROLL</button>
	<div class="volume-container">
		<span>Drum Roll Volume: {volume}%</span>
		<input type="range" min="0" max="100" bind:value={volume} />
	</div>
	<audio src="drumroll.mp3" volume={volume / 100} bind:paused bind:this={player} />
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
