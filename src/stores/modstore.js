import { writable, derived } from 'svelte/store';

export let min = writable(1);
export let max = writable(50);
export let count = derived(
	[min, max],
	([$min, $max]) => $max - $min + 1 // inclusive
);
export const users = derived([min, max], ([$min, $max]) => {
	const list = [];
	for (let i = $min; i <= $max; i++) {
		const user = { num: i, name: '' };
		list.push(user);
	}
	return list;
});
