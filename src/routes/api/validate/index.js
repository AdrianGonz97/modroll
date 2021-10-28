export async function post({ body }) {
	console.log('Validating access token');
	const accessToken = JSON.parse(body).access_token;
	const URL = 'https://id.twitch.tv/oauth2/validate';

	if (!accessToken) {
		return { status: 401, message: 'No access token provided' };
	}

	try {
		const resp = await fetch(URL, {
			method: 'POST',
			headers: { Authorization: 'Bearer ' + accessToken },
		});

		const data = await resp.json();

		// if token is validated
		if (resp.ok) {
			return { status: 200, message: 'Access token is valid', data };
		} else {
			return { status: resp.status, message: 'Invalid access token' };
		}
	} catch (err) {
		return { status: 404, body: err.message };
	}
}
