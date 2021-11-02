import logger from '$logger';
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
		logger.warn('JWT is expired');
		return '';
	}
}

export function getUserInfo(token) {
	try {
		const data = jwt.verify(token, process.env['VITE_PRIVATE_KEY']);
		return {
			id: data.id,
			displayName: data.displayName,
			login: data.login,
			profileImageUrl: data.profileImageUrl,
		};
	} catch (err) {
		logger.warn('JWT is expired');
		return '';
	}
}

export function getUserToken(token) {
	try {
		const data = jwt.verify(token, process.env['VITE_PRIVATE_KEY']);
		return data;
	} catch (err) {
		logger.warn('JWT is expired');
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
		if (resp.ok) {
			logger.info('Token has been refreshed');
			const newOauthToken = await resp.json();
			return getSignedToken(newOauthToken);
		} else {
			throw new Error('Could not acquire new refresh token');
		}
	} catch (err) {
		logger.warn('Failed to refresh jwt token');
		return '';
	}
}
