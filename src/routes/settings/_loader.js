// check if jwt exists and validate token
export default async function load({ fetch, session }) {
	const { jwt, validUntil } = session;
	const isValid = Date.now() < validUntil;

	if (jwt && isValid) {
		// used to not revalidate access token on every single page load
		let rewards = [];
		console.log('Skipping revalidation');
		const resp = await fetch('api/reward/get');
		if (resp.ok) {
			const data = await resp.json();
			rewards = data.rewards;
		}
		return {
			props: { isConnected: true, rewards },
		};
	}

	if (jwt) {
		const resp = await fetch('/api/oauth/validate', { method: 'POST' });
		if (resp.ok) {
			let rewards = [];
			console.log('Access token is valid');
			const resp = await fetch('api/reward/get');
			if (resp.ok) {
				const data = await resp.json();
				rewards = data.rewards;
			}
			return {
				props: { isConnected: true, updatedValidity: true, rewards },
			};
		}
	}

	console.log('Invalid jwt token');
	return {
		props: { isConnected: false },
	};
}
