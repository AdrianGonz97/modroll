// check if jwt exists and validate token
export default async function load({ fetch, session }) {
	const { jwt, validUntil } = session;
	const isValid = Date.now() < validUntil;

	if (jwt && isValid) {
		// used to not revalidate access token on every single page load
		console.log('User is already validated');
		let userInfo;
		let rewards = [];
		const promises = [fetch('api/reward/get'), fetch('api/user')];
		const resps = await Promise.all(promises);

		if (resps.every((resp) => resp.ok)) {
			const data = resps.map((resp) => resp.json());
			const finalData = await Promise.all(data);

			rewards = finalData[0].rewards;
			userInfo = finalData[1];
		} else {
			return {
				props: { isConnected: true, rewards: null, userInfo },
			};
		}
		return {
			props: { isConnected: true, rewards, userInfo },
		};
	}

	console.log('Invalid jwt token');
	return {
		props: { isConnected: false },
	};
}
