import cookie from 'cookie';
import { getAccessToken } from '../../../util/jwt';
import dotenv from 'dotenv';
dotenv.config();

export async function post(request) {
	console.log('Revoking access token!');
	const jwt = request.locals.jwt;
	const accessToken = getAccessToken(jwt);
	const URL = 'https://id.twitch.tv/oauth2/revoke';

	// user must have cookie to continue
	if (!jwt || !accessToken) {
		return { status: 401 };
	}

	try {
		const resp = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `client_id=${process.env['VITE_CLIENT_ID']}&token=${accessToken}`,
		});

		const body = {};
		let status = 200;

		if (resp.ok) {
			body.message = 'token revoked successfully';
		} else {
			status = 400;
			body.message =
				'Bad request, token may have already been revoked or expired';
		}

		// reset jwt cookie to empty
		const jwtCookie = cookie.serialize('jwt', '', {
			path: '/',
			httpOnly: true,
		});

		return {
			status,
			body,
			headers: {
				'set-cookie': jwtCookie,
			},
		};
	} catch (err) {
		return { status: 404, body: err.message };
	}
}
