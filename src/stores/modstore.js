import { writable, derived } from 'svelte/store';

export const users = writable(new Map());

export let winner = writable({ name: 'None', num: 0 });
export let currentMod = writable('None');
export let pastMods = writable(['None', 'None']);

export let min = writable(1);
export let max = writable(50);
export let count = derived(
	[min, max],
	([$min, $max]) => $max - $min + 1 // inclusive
);
export const boxes = derived([min, max], ([$min, $max]) => {
	const list = [];
	for (let i = $min; i <= $max; i++) {
		const box = { num: i, name: '' };
		list.push(box);
	}
	return list;
});
