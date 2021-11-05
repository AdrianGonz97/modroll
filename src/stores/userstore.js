import { writable, derived } from 'svelte/store';
import { browser } from '$app/env';

export const user = writable({});
export const activeRewards = writable([]);
export const bitAmount = writable(-1);

export let activeRewardNames = derived(activeRewards, ($activeRewards) =>
	$activeRewards.map((reward) => reward.title)
);
export let activeRewardIds = derived(activeRewards, ($activeRewards) =>
	$activeRewards.map((reward) => reward.id)
);

if (browser) {
	bitAmount.set(JSON.parse(localStorage.getItem('bitAmount')));
	bitAmount.subscribe(
		(val) => (localStorage.bitAmount = JSON.stringify(val))
	);
}
