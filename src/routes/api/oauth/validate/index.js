import cookie from 'cookie';
import { getAccessToken, refreshJWT } from '../../../../util/jwt';

export async function post(request) {
	console.log('Validating access token');
	const jwt = request.locals.jwt;
	let accessToken = getAccessToken(jwt);

	if (!accessToken) {
		// for when the jwt expires
		console.log('Refreshing JWT');
		var newJWT = await refreshJWT(jwt); // use refresh token
		accessToken = getAccessToken(newJWT);
		if (!accessToken) {
			console.log('No access token found');
			return { status: 401, message: 'No access token provided' };
		}
	}

	const headers = { Authorization: 'Bearer ' + accessToken };

	try {
		const resp = await fetch('https://id.twitch.tv/oauth2/validate', {
			headers,
		});

		// if token is validated
		if (resp.ok) {
			const data = resp.json();
			const expiresIn = Date.now() + 60 * 60 * 1000;
			const validityCookie = cookie.serialize(
				'validUntil',
				expiresIn.toString(),
				{
					path: '/',
					httpOnly: true,
				}
			);
			const jwtCookie = cookie.serialize('jwt', newJWT, {
				path: '/',
				httpOnly: true,
			});
			const idCookie = cookie.serialize('broadcasterId', data.user_id, {
				path: '/',
				httpOnly: true,
			});

			return {
				status: 200,
				headers: {
					'set-cookie': [jwtCookie, validityCookie, idCookie],
				},
				body: { message: 'Access token is valid' },
			};
		} else {
			const validityCookie = cookie.serialize('validUntil', '0', {
				path: '/',
				httpOnly: true,
			});
			const jwtCookie = cookie.serialize('jwt', '', {
				path: '/',
				httpOnly: true,
			});
			const idCookie = cookie.serialize('broadcasterId', '0', {
				path: '/',
				httpOnly: true,
			});
			return {
				status: resp.status,
				headers: {
					'set-cookie': [jwtCookie, validityCookie, idCookie],
				},
				body: { message: 'Invalid access token' },
			};
		}
	} catch (err) {
		return { status: 404, body: err.message };
	}
}
