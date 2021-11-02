import logger from '$logger';
import { getUserToken } from '$util/jwt';
import { del } from '$util/twitch/api';

export async function post(request) {
	logger.info('Deleting user reward');
	const jwt = request.locals.jwt;
	const { access_token, id } = getUserToken(jwt);

	const rewardId = JSON.parse(request.body).rewardId;

	const params = new Map();
	params.set('broadcaster_id', id);
	params.set('id', rewardId);

	try {
		const resp = await del(
			'channel_points/custom_rewards',
			access_token,
			params
		);
		if (resp.status === 204) {
			logger.info('Deleted custom reward');
			return {
				status: 204,
				body: {
					message: 'No content',
				},
			};
		}
		logger.warn('Failed to delete reward');
		return { status: resp.status, body: resp.body };
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
