import { oauth } from '../_oauth';

export async function post({ body }) {
	console.log('Validating access token');
	const accessToken = JSON.parse(body).access_token;

	if (!accessToken) {
		return { status: 401, message: 'No access token provided' };
	}

	const headers = { Authorization: 'Bearer ' + accessToken };

	try {
		const resp = await oauth('validate', headers, null, null);

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
