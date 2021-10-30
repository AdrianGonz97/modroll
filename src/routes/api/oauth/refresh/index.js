import { oauth } from '../_oauth';
import dotenv from 'dotenv';
dotenv.config();

export async function post({ body }) {
	console.log('Getting refresh token');
	const rtoken = JSON.parse(body).rtoken;

	const headers = { Accept: 'application/json' };
	const urlParams = new Map();
	urlParams.set('client_id', process.env['VITE_CLIENT_ID']);
	urlParams.set('client_secret', process.env['VITE_CLIENT_SECRET']);
	urlParams.set('grant_type', 'refresh_token');
	urlParams.set('refresh_token', rtoken);

	try {
		const resp = await oauth('token', headers, null, urlParams);
		const data = await resp.json();

		return {
			status: 200,
			body: data,
		};
	} catch (err) {
		return { status: 404, body: err.message };
	}
}
