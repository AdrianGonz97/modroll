import cookie from 'cookie';
import logger from '$logger';
import { getAccessToken, refreshJWT } from '$util/jwt';

export async function post(request) {
	logger.info('Validating access token');
	let jwt = request.locals.jwt;
	let accessToken = getAccessToken(jwt);

	if (!accessToken) {
		// for when the jwt expires
		logger.info('Refreshing JWT');
		jwt = await refreshJWT(jwt); // use refresh token
		if (jwt) {
			accessToken = getAccessToken(jwt);
			if (!accessToken) {
				logger.warn('No access token found');
				return {
					status: 401,
					body: { message: 'No access token provided' },
				};
			}
		} else {
			return { status: 401, body: { message: 'Failed to refresh JWT' } };
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
			const jwtCookie = cookie.serialize('jwt', jwt, {
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
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
