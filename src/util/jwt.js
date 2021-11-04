import logger from '$logger';
import jwt from 'jsonwebtoken';

export function getSignedToken(payload) {
	const privateKey = import.meta.env.VITE_PRIVATE_KEY;
	return jwt.sign(payload, privateKey, {
		expiresIn: payload.expires_in - 600,
	});
}

export function getAccessToken(token) {
	try {
		const privateKey = import.meta.env.VITE_PRIVATE_KEY;
		const data = jwt.verify(token, privateKey);
		const accessToken = data.access_token;
		return accessToken;
	} catch (err) {
		logger.warn('JWT is expired');
		return '';
	}
}

export function getUserInfo(token) {
	try {
		const privateKey = import.meta.env.VITE_PRIVATE_KEY;
		const data = jwt.verify(token, privateKey);
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
		const privateKey = import.meta.env.VITE_PRIVATE_KEY;
		const data = jwt.verify(token, privateKey);
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
		const basePath = import.meta.env.VITE_BASE_PATH;
		const data = jwt.decode(token);
		const resp = await fetch(`${basePath}/api/oauth/refresh`, {
			method: 'POST',
			body: JSON.stringify({ rtoken: data.refresh_token }),
		});
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
