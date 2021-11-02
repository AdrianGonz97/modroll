import cookie from 'cookie';
import logger from '$logger';
import getUserInfo from '../_user';
import { oauth } from '../_oauth';
import { getSignedToken } from '$util/jwt';
import dotenv from 'dotenv';
dotenv.config();

export async function post({ body }) {
	logger.info('Getting access token');
	const code = JSON.parse(body).code;

	const urlParams = new Map();
	const headers = { Accept: 'application/json' };
	urlParams.set('client_id', process.env['VITE_CLIENT_ID']);
	urlParams.set('client_secret', process.env['VITE_CLIENT_SECRET']);
	urlParams.set('code', code);
	urlParams.set('grant_type', 'authorization_code');
	urlParams.set('redirect_uri', `${process.env['VITE_BASE_PATH']}/login`);

	try {
		const resp = await oauth('token', headers, null, urlParams);
		if (!resp.ok) throw new Error('Failed to authorize with Twitch');

		const userToken = await resp.json();

		const userData = await getUserInfo(userToken.access_token);
		if (userData) {
			const token = {
				...userToken,
				...userData,
			};
			const jwtToken = getSignedToken(token);

			const expiresIn = Date.now() + 60 * 60 * 1000;
			const validityCookie = cookie.serialize(
				'validUntil',
				expiresIn.toString(),
				{
					path: '/',
					httpOnly: true,
				}
			);

			const jwtCookie = cookie.serialize('jwt', jwtToken, {
				path: '/',
				httpOnly: true,
			});

			return {
				status: 200,
				headers: {
					'set-cookie': [jwtCookie, validityCookie],
				},
				body: { message: 'authorization success' },
			};
		} else throw new Error('Authorization failed');
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
