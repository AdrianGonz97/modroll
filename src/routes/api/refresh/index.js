import dotenv from 'dotenv';
dotenv.config();

export async function post({ body }) {
	console.log('Getting refresh token');
	const rtoken = JSON.parse(body).rtoken;
	const URL =
		'https://id.twitch.tv/oauth2/token' +
		`?client_id=${process.env['VITE_CLIENT_ID']}` +
		`&client_secret=${process.env['VITE_CLIENT_SECRET']}` +
		'&grant_type=refresh_token' +
		`&refresh_token=${rtoken}`;

	try {
		const resp = await fetch(URL, {
			method: 'POST',
			headers: { Accept: 'application/json' },
		});

		const data = await resp.json();

		return {
			status: 200,
			body: data,
		};
	} catch (err) {
		return { status: 404, body: err.message };
	}
}
