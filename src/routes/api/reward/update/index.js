import logger from '$logger';
import { getUserToken } from '$util/jwt';
import { patch } from '$util/twitch/api';

export async function post(request) {
	logger.info('Updating user reward');
	const jwt = request.locals.jwt;
	const { access_token, userId } = getUserToken(jwt);

	const { rewardId, isActive } = JSON.parse(request.body);

	const params = new Map();
	params.set('broadcaster_id', userId);
	params.set('id', rewardId);

	const body = {
		is_enabled: isActive,
	};

	try {
		const resp = await patch(
			'channel_points/custom_rewards',
			JSON.stringify(body),
			access_token,
			params
		);
		if (resp.ok) {
			logger.info('Updated custom reward');
			return {
				status: 200,
				body: {
					message: 'No content',
				},
			};
		}
		logger.warn('Failed to update reward');
		return { status: resp.status, body: resp.body };
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
