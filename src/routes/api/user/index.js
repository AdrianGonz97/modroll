import cookie from 'cookie';
import { getAccessToken } from '../../../util/jwt';
import { get as twitchGet } from '../../../util/twitch/api';

export async function post(request) {
	console.log('Getting user info');
	const jwt = request.locals.jwt;
	const accessToken = getAccessToken(jwt);

	try {
		const resp = await twitchGet('users', accessToken, null);
		if (resp.ok) {
			console.log('Got user info');
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
		console.log('[ERR]: Failed to get user info!');
		return { status: resp.status, body: resp.body };
	} catch (err) {
		console.error(err);
		return { status: 404, body: err.message };
	}
}
