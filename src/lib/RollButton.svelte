<script>
	import { min, max, users, winner, pastMods, currentMod } from '../stores/modstore';
	let player;
	let pressed = false;
	let volume = 50;
	let paused = true;
	let rollNumber = 0;

	function handleClick() {
		if (paused) {
			setVolume();
			player.play();
			rollMod();
			rollNumber++;
			winner.set({ name: 'None', num: 0 });
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
			const winnerName = $users.get(num);
			if (winnerName) {
				if ($currentMod != winnerName) {
					// if the winner isn't the current mod, put current mod in past
					pastMods.set([$currentMod, $pastMods[0]]);
				}
				winner.set({ name: winnerName, num });
				currentMod.set(winnerName);
			} else {
				winner.set({ name: 'None', num });
			}
			console.log('Winner: ', winnerName);
		}, 3200);
	}
</script>

<div class="roll-container">
	<button on:click={handleClick} disabled={!paused}>ROLL MOD<br />Roll #{rollNumber}</button>
	<div class="volume-container">
		<span>Drum Roll Volume: {volume}%</span>
		<input type="range" min="0" max="100" bind:value={volume} on:change={setVolume} />
	</div>
	<audio src="drumroll.mp3" bind:paused bind:this={player} />
</div>

<style>
	button {
		padding: 0.8rem;
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
