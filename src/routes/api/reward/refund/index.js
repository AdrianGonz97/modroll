import logger from '$logger';
import { getUserToken } from '$util/jwt';
import { patch } from '$util/twitch/api';

export async function post(request) {
	logger.info('Refunding user redemption');
	const jwt = request.locals.jwt;
	const { access_token, userId } = getUserToken(jwt);

	const { id, rewardId } = JSON.parse(request.body);

	const params = new Map();
	params.set('broadcaster_id', userId);
	params.set('id', id); // id of redemption
	params.set('reward_id', rewardId); // id of reward

	const body = {
		status: 'CANCELED',
	};

	try {
		const resp = await patch(
			'channel_points/custom_rewards/redemptions',
			JSON.stringify(body),
			access_token,
			params
		);
		if (resp.ok) {
			logger.info('Refunded redemption');
			return {
				status: 200,
				body: {
					message: 'No content',
				},
			};
		}
		logger.warn('Failed to refund redemption');
		return { status: resp.status, body: resp.body };
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
