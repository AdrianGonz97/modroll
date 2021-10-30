import { writable, derived } from 'svelte/store';

export let user = writable({});
export let username = derived(user, ($user) => $user.displayName);
export let userId = derived(user, ($user) => $user.userId);
export let profileUrl = derived(user, ($user) => $user.profileUrl);
