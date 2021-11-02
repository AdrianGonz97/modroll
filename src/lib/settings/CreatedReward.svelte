<script>
	export let title;
	export let isActive;
	export let id;

	async function deleteReward() {
		if (confirm('Are you sure you want to delete this reward?')) {
			console.log('Deleting reward');
			const resp = await fetch('/api/reward/delete', {
				method: 'POST',
				body: JSON.stringify({
					id,
				}),
			});
			const data = await resp.json();
			console.log(data);
		}
	}

	function stop() {
		isActive = false;
	}
	function start() {
		isActive = true;
	}
</script>

<div class="form-group">
	<span class="group-name">Channel Reward:</span>
	{#if isActive}
		<span class={`watching-text ${isActive ? 'active' : ''}`}>{title}</span>
		<button on:click|preventDefault={stop}>Stop Watching</button>
	{:else}
		<span class="watching-text">Not watching Rewards</span>
		<div class="btn-grp">
			<button on:click|preventDefault={start}>Start Watching</button>
			<button on:click|preventDefault={deleteReward}>Delete Reward</button
			>
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
