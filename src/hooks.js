import cookie from 'cookie';
import logger from '$logger';
import { v4 as uuid } from '@lukeed/uuid';

export const handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie || '');
	request.locals.userid = cookies.userid || uuid();
	request.locals.jwt = cookies.jwt || '';
	request.locals.validUntil = cookies.validUntil || '0';

	// TODO https://github.com/sveltejs/kit/issues/1046
	if (request.query.has('_method')) {
		request.method = request.query.get('_method').toUpperCase();
	}

	const response = await resolve(request);

	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers['set-cookie'] = cookie.serialize(
			'userid',
			request.locals.userid,
			{
				path: '/',
				httpOnly: true,
			}
		);
	}

	if (Date.now() > cookies.validUntil && cookies.validUntil !== '0') {
		logger.info('Validating jwt');
		// if jwt is no longer valid
		try {
			const basePath = import.meta.env.VITE_BASE_PATH;

			const resp = await fetch(basePath + '/api/oauth/validate', {
				method: 'POST',
				body: JSON.stringify({ jwt: cookies.jwt }),
			});
			if (resp.ok) {
				logger.info('JWT is valid, setting cookies');
				const data = await resp.json();
				const jwtCookie = cookie.serialize('jwt', data.jwt, {
					path: '/',
					httpOnly: true,
				});
				const validCookie = cookie.serialize(
					'validUntil',
					data.validUntil,
					{
						path: '/',
						httpOnly: true,
					}
				);
				response.headers['set-cookie'] = [jwtCookie, validCookie];
			} else {
				logger.warn('Reseting user cookies');
				const jwtCookie = cookie.serialize('jwt', '', {
					path: '/',
					httpOnly: true,
				});
				const validCookie = cookie.serialize('validUntil', '0', {
					path: '/',
					httpOnly: true,
				});
				response.headers['set-cookie'] = [jwtCookie, validCookie];
			}
		} catch (err) {
			logger.error(err.message);
		}
	}

	return response;
};

export function getSession(request) {
	return {
		jwt: request.locals.jwt ?? '',
		validUntil: request.locals.validUntil ?? '0',
	};
}
