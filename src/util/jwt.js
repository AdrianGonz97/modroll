import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export function getSignedToken(payload) {
	return jwt.sign(payload, process.env['VITE_PRIVATE_KEY'], {
		expiresIn: payload.expires_in - 600,
	});
}

export function getAccessToken(token) {
	try {
		const data = jwt.verify(token, process.env['VITE_PRIVATE_KEY']);
		const accessToken = data.access_token;
		return accessToken;
	} catch (err) {
		console.error(err);
		return;
	}
}
