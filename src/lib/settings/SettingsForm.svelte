<script>
	import { activeRewards, bitAmount } from '$store/userstore';
	import CreatedReward from './CreatedReward.svelte';
	export let rewards;

	$: activeRewards.set(rewards.filter((reward) => reward.isActive));

	// reward inputs
	let name;
	let pointCost;
	let prompt;

	// bit input
	let bits;

	async function createReward() {
		if (name && pointCost) {
			await fetch('/api/reward/create', {
				method: 'POST',
				body: JSON.stringify({
					title: name,
					cost: pointCost,
					prompt,
				}),
			});
			window.location.reload();
		} else {
			alert(`Fields 'Reward Name' and 'Point Cost' are required!`);
		}
	}

	function saveBitAmount() {
		bitAmount.set(bits);
		localStorage.set('bitAmount', $bitAmount);
	}
	function stopBitListening() {
		bitAmount.set(-1);
	}
	// let the modroll sign-ins for 10 mins and cut it off, making it expire 24 hours
</script>

<div class="settings-container">
	<div class="title-container">
		<span class="warning"
			>Fields labeled with <span class="required">*</span> are required.</span
		>
		<span class="warning">Created Rewards and Saved Settings</span>
	</div>
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
		<div class="rewards">
			{#if rewards}
				{#each rewards as reward}
					<CreatedReward {...reward} />
				{/each}
			{:else}
				<div class="form-group">
					<span class="watching-text"
						>You are not able to use any channel point rewards. Only
						affiliates and partners are able to use this feature.</span
					>
				</div>
			{/if}
		</div>
		<div class="form-group">
			<span class="group-name">Bits:</span>
			<label>
				Minimum Cost:
				<input type="number" placeholder="ex. 500" bind:value={bits} />
			</label>
			<button on:click|preventDefault={saveBitAmount}>Save Amount</button>
		</div>
		<div class={`form-group ${$bitAmount > -1 ? 'active' : 'inactive'}`}>
			<span class="group-name">Currently Watching Bits:</span>
			{#if $bitAmount && $bitAmount > -1}
				<span class="watching-text">{$bitAmount} bits</span>
			{:else}
				<span class="watching-text">Not listening for bits</span>
			{/if}
			<button disabled={$bitAmount === -1} on:click={stopBitListening}
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
	}
	.title-container {
		display: flex;
		justify-content: space-around;
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
	.rewards {
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
		height: 5rem;
	}

	.watching-text {
		text-align: center;
		font-size: 1.4rem;
	}

	.active {
		border: 1px solid rgba(3, 172, 20, 1);
	}
	.inactive {
		border: 1px solid rgba(255, 0, 0, 1);
	}
</style>
