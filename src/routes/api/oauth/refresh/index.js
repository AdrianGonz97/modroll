import logger from '$logger';
import { oauth } from '../_oauth';
import dotenv from 'dotenv';
dotenv.config();

export async function post({ body }) {
	logger.info('Getting refresh token');
	const rtoken = JSON.parse(body).rtoken;

	const headers = { Accept: 'application/json' };
	const params = new Map();
	params.set('client_id', process.env['VITE_CLIENT_ID']);
	params.set('client_secret', process.env['VITE_CLIENT_SECRET']);
	params.set('grant_type', 'refresh_token');
	params.set('refresh_token', encodeURIComponent(rtoken));

	try {
		const resp = await oauth('token', headers, null, params);
		const data = await resp.json();

		return {
			status: 200,
			body: data,
		};
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
