<script>
	export let title;
	export let isActive;
	export let id;
	export let cost;

	async function deleteReward() {
		if (confirm('Are you sure you want to delete this reward?')) {
			console.log('Deleting reward');
			await fetch('/api/reward/delete', {
				method: 'POST',
				body: JSON.stringify({
					id,
				}),
			});
			window.location.reload();
		}
	}

	async function stop() {
		console.log(`Deactivating reward ${title}`);
		const body = {
			isActive: false,
			rewardId: id,
		};
		const resp = await fetch('/api/reward/update', {
			method: 'POST',
			body: JSON.stringify(body),
		});
		window.location.reload();
	}
	async function start() {
		// isActive = true;
		console.log(`Activating reward ${title}`);
		const body = {
			isActive: true,
			rewardId: id,
		};
		const resp = await fetch('/api/reward/update', {
			method: 'POST',
			body: JSON.stringify(body),
		});
		window.location.reload();
	}
</script>

<div class={`form-group ${isActive ? 'active-group' : ''}`}>
	<span class="group-name">Channel Reward:</span>
	{#if isActive}
		<div class="details">
			<span class="watching-text"><b class="active">Active: </b></span>
			<span class="watching-text"><b>Title: </b>{title}</span>
			<span class="watching-text"><b>Cost: </b>{cost} channel points</span
			>
		</div>
		<button on:click|preventDefault={stop}>Stop Watching</button>
	{:else}
		<div class="details">
			<span class="watching-text"><b class="inactive">Inactive: </b></span
			>
			<span class="watching-text"><b>Title: </b>{title}</span>
			<span class="watching-text"><b>Cost: </b>{cost} channel points</span
			>
		</div>
		<div class="btn-grp">
			<!-- <button on:click|preventDefault={start}>Start Watching</button> -->
			<button on:click|preventDefault={deleteReward}>Delete Reward</button
			>
		</div>
	{/if}
</div>

<style>
	.form-group {
		padding: 1rem;
		border: 1px solid rgba(255, 0, 0, 0.8);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
	.active-group {
		border: 1px solid rgba(3, 172, 20, 1);
	}
	.group-name {
		font-weight: bold;
		text-align: center;
	}
	.watching-text {
		text-align: center;
		font-size: 1.4rem;
	}
	.active {
		color: rgba(3, 172, 20, 1);
	}
	.btn-grp {
		display: flex;
		justify-content: space-evenly;
		gap: 1rem;
	}
	button {
		width: 100%;
		cursor: pointer;
	}
	.inactive {
		color: red;
	}
	.details {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
