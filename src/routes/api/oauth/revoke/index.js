import cookie from 'cookie';
import logger from '$logger';
import { oauth } from '../_oauth';
import { getAccessToken } from '$util/jwt';
import dotenv from 'dotenv';
dotenv.config();

export async function post(request) {
	logger.info('Revoking access token');
	const jwt = request.locals.jwt;
	const accessToken = getAccessToken(jwt);

	const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
	const body = `client_id=${process.env['VITE_CLIENT_ID']}&token=${accessToken}`;

	// reset jwt cookie to empty
	const jwtCookie = cookie.serialize('jwt', '', {
		path: '/',
		httpOnly: true,
	});
	const validityCookie = cookie.serialize('validUntil', '0', {
		path: '/',
		httpOnly: true,
	});

	// user must have cookie to continue
	if (!jwt || !accessToken) {
		return {
			status: 401,
			body: { message: 'JWT already expired' },
			headers: {
				'set-cookie': jwtCookie,
			},
		};
	}

	try {
		const resp = await oauth('revoke', headers, body, null);

		const resBody = {};
		let status = 200;

		if (resp.ok) {
			resBody.message = 'token revoked successfully';
		} else {
			status = 400;
			resBody.message =
				'Bad request, token may have already been revoked or expired';
		}

		return {
			status,
			body: resBody,
			headers: {
				'set-cookie': [jwtCookie, validityCookie],
			},
		};
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
