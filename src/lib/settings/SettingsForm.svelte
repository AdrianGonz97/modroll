<script>
	let isWatchingReward = true;
	let isWatchingBits = true;
	let rewardName = 'Some Reward Name';
	let bitAmount = 69;

	// reward inputs
	let name;
	let pointCost;
	let prompt;

	// bit input
	let bits;

	async function createReward() {
		const resp = await fetch('/api/reward/create', {
			method: 'POST',
			body: JSON.stringify({
				title: name,
				cost: pointCost,
				prompt,
			}),
		});
		const data = await resp.json();
		console.log(data);
	}
	async function deleteReward() {
		const resp = await fetch('/api/reward/delete', {
			method: 'POST',
			body: JSON.stringify({
				rewardId: '',
			}),
		});
		const data = await resp.json();
		console.log(data);
	}
	function saveBitAmount() {}
	function stopBitListing() {}
	// let the modroll sign-ins for 10 mins and cut it off, making it expire 24 hours
</script>

<div class="settings-container">
	<span class="warning"
		>Fields labeled with <span class="required">*</span> are required.</span
	>
	<form>
		<div class="form-group">
			<span class="group-name">Channel Point Reward:</span>
			<label>
				<span><span class="required">*</span> Reward Name:</span>
				<input
					type="text"
					placeholder="ex. Modroll"
					bind:value={name}
				/>
			</label>
			<label>
				<span><span class="required">*</span> Point Cost:</span>
				<input
					type="number"
					placeholder="ex. 50000"
					bind:value={pointCost}
				/>
			</label>
			<label>
				Description
				<textarea
					type="text"
					placeholder="ex. Pick a number between 1-50 for a chance of mod"
					bind:value={prompt}
				/>
			</label>
			<button on:click|preventDefault={createReward}>Create Reward</button
			>
		</div>
		<div class="form-group">
			<span class="group-name">Currently Watching Reward:</span>
			{#if isWatchingReward}
				<span class="watching-text">{rewardName}</span>
			{:else}
				<span class="watching-text">Not watching Rewards</span>
			{/if}
			<button disabled={!isWatchingReward} on:click={deleteReward}
				>Delete Reward</button
			>
		</div>
		<div class="form-group">
			<span class="group-name">Bits:</span>
			<label>
				Minimum Cost:
				<input
					type="number"
					placeholder="ex. 500"
					on:submit={saveBitAmount}
					bind:value={bits}
				/>
			</label>
			<button on:click={saveBitAmount}>Save Amount</button>
		</div>
		<div class="form-group">
			<span class="group-name">Currently Watching Bits:</span>
			{#if isWatchingBits}
				<span class="watching-text">{bitAmount} bits</span>
			{:else}
				<span class="watching-text">Not watching Bits</span>
			{/if}
			<button disabled={!isWatchingBits} on:click={stopBitListing}
				>Stop Listening</button
			>
		</div>
	</form>
</div>

<style>
	.settings-container {
		display: flex;
		flex-direction: column;
		margin: 2rem;
		gap: 1rem;
		/* justify-content: center; */
		/* align-items: center; */
	}
	.warning {
		text-align: center;
		text-decoration: underline;
	}
	form {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-flow: row;
		grid-gap: 1rem;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	.form-group {
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1rem;
	}
	.group-name {
		font-weight: bold;
		text-align: center;
	}
	.required {
		color: red;
	}

	textarea {
		/* width: 16rem; */
		height: 5rem;
	}

	.watching-text {
		text-align: center;
		font-size: 1.4rem;
	}
</style>
