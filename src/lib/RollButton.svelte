<script>
	import {
		min,
		max,
		users,
		winner,
		pastMods,
		currentMod,
		rollCount,
	} from '$store/modstore';
	let player;
	let volume = 50;
	let paused = true;

	function handleClick() {
		if (paused) {
			setVolume();
			player.play();
			rollMod();
			$rollCount++;
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
			console.log(`Winner: ${num} - ${winnerName}`);
		}, 3200);
	}
</script>

<div class="roll-container">
	<button on:click={handleClick} disabled={!paused}>CLICK ME TO ROLL</button>
	<div class="volume-container">
		<span>Drum Volume: <b>{volume}%</b></span>
		<input
			type="range"
			min="0"
			max="100"
			bind:value={volume}
			on:change={setVolume}
		/>
	</div>
	<audio src="drumroll.mp3" bind:paused bind:this={player} />
</div>

<style>
	button {
		padding: 1rem;
		/* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1); */
	}
	input {
		margin: 1rem;
	}
	.roll-container {
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.volume-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	button {
		cursor: pointer;
		border: none;
	}

	button:hover {
		background-color: var(--text-color);
		transition: all 0.25s ease;
	}
	b {
		color: var(--accent-color);
	}

	@media (min-width: 440px) {
		.roll-container {
			width: 26rem;
		}
	}
</style>
