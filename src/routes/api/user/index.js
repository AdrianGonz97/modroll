import cookie from 'cookie';
import logger from '$logger';
import { getAccessToken } from '$util/jwt';
import { get as twitchGet } from '$util/twitch/api';

export async function post(request) {
	logger.info('Getting user info');
	const jwt = request.locals.jwt;
	const accessToken = getAccessToken(jwt);

	try {
		const resp = await twitchGet('users', accessToken, null);
		if (resp.ok) {
			logger.info('Got user info');
			const data = await resp.json();
			const user = data.data[0];

			const idCookie = cookie.serialize('broadcasterId', user.id, {
				path: '/',
				httpOnly: true,
			});

			return {
				status: 200,
				headers: {
					'set-cookie': idCookie,
				},
				body: {
					displayName: user.display_name,
					userId: user.id,
					login: user.login,
					profileImageUrl: user.profile_image_url,
				},
			};
		}
		logger.warn('[ERR]: Failed to get user info!');
		return { status: resp.status, body: resp.body };
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
