import cookie from 'cookie';
import { getSignedToken } from '../../../util/jwt';
import dotenv from 'dotenv';
dotenv.config();

export async function post({ body }) {
	console.log('Getting access token!');
	const code = JSON.parse(body).code;
	const URL =
		'https://id.twitch.tv/oauth2/token' +
		`?client_id=${process.env['VITE_CLIENT_ID']}` +
		`&client_secret=${process.env['VITE_CLIENT_SECRET']}` +
		`&code=${code}` +
		'&grant_type=authorization_code' +
		`&redirect_uri=${process.env['VITE_BASE_PATH'] + '/login'}`;

	try {
		const resp = await fetch(URL, {
			method: 'POST',
			headers: { Accept: 'application/json' },
		});

		const data = await resp.json();

		const jwtToken = getSignedToken(data);

		const jwtCookie = cookie.serialize('jwt', jwtToken, {
			path: '/',
			httpOnly: true,
		});

		return {
			status: 200,
			headers: {
				'set-cookie': jwtCookie,
			},
			body: { message: 'authorization success' },
		};
	} catch (err) {
		return { status: 404, body: err.message };
	}
}
