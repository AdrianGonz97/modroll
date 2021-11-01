import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export function getSignedToken(payload) {
	return jwt.sign(payload, process.env['VITE_PRIVATE_KEY'], {
		expiresIn: 10, //payload.expires_in - 600,
	});
}

export function getAccessToken(token) {
	try {
		const data = jwt.verify(token, process.env['VITE_PRIVATE_KEY']);
		const accessToken = data.access_token;
		return accessToken;
	} catch (err) {
		console.log('JWT is expired');
		return '';
	}
}

// used for when the jwt expires
export async function refreshJWT(token) {
	// refreshing oauth token
	try {
		const data = jwt.decode(token);
		const resp = await fetch(
			`${process.env['VITE_BASE_PATH']}/api/oauth/refresh`,
			{
				method: 'POST',
				body: JSON.stringify({ rtoken: data.refresh_token }),
			}
		);
		const payload = await resp.json();
		return getSignedToken(payload);
	} catch (err) {
		console.log('Failed to refresh jwt token');
		return '';
	}
}
