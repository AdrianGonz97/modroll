import cookie from 'cookie';
import { getAccessToken } from '../../../../util/jwt';

export async function get(request) {
	console.log('Validating access token');
	const jwt = request.locals.jwt;
	const accessToken = getAccessToken(jwt);

	if (!accessToken) {
		return { status: 401, message: 'No access token provided' };
	}

	const headers = { Authorization: 'Bearer ' + accessToken };

	try {
		const resp = await fetch('https://id.twitch.tv/oauth2/validate', {
			headers,
		});

		const jwtCookie = cookie.serialize('jwt', '', {
			path: '/',
			httpOnly: true,
		});

		// if token is validated
		if (resp.ok) {
			return { status: 200, body: { message: 'Access token is valid' } };
		} else {
			return {
				status: resp.status,
				headers: {
					'set-cookie': jwtCookie,
				},
				body: { message: 'Invalid access token' },
			};
		}
	} catch (err) {
		return { status: 404, body: err.message };
	}
}
