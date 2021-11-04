<script>
	export let title;
	export let isActive;
	export let id;

	async function deleteReward() {
		if (confirm('Are you sure you want to delete this reward?')) {
			console.log('Deleting reward');
			await fetch('/api/reward/delete', {
				method: 'POST',
				body: JSON.stringify({
					id,
				}),
			});
			setTimeout(() => (window.location.href = '/settings'), 1000);
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
		setTimeout(() => (window.location.href = '/settings'), 1000);
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
		setTimeout(() => (window.location.href = '/settings'), 1000);
	}
</script>

<div class="form-group">
	<span class="group-name">Channel Reward:</span>
	{#if isActive}
		<span class={`watching-text ${isActive ? 'active' : ''}`}>{title}</span>
		<button on:click={stop}>Stop Watching</button>
	{:else}
		<span class="watching-text">Not watching Rewards</span>
		<div class="btn-grp">
			<button on:click={start}>Start Watching</button>
			<button on:click={deleteReward}>Delete Reward</button>
		</div>
	{/if}
</div>

<style>
	.form-group {
		padding: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
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
		color: #03ac13;
	}
	.btn-grp {
		display: flex;
		justify-content: space-evenly;
		gap: 1rem;
	}
	button {
		width: 100%;
	}
</style>
