import { writable } from 'svelte/store';
// import { browser } from '$app/env';

// export const user = writable(JSON.parse(localStorage.getItem('user')));
export const user = writable({});
export const activeRewardIds = writable([]);

// if (browser) {
// 	user.set(JSON.parse(localStorage.getItem('user')));
// 	user.subscribe((val) => (localStorage.user = JSON.stringify(val)));
// }
