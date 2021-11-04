import logger from '$logger';
import { getUserToken } from '$util/jwt';

export async function get(request) {
	logger.info('Getting pubsub info from jwt');
	const jwt = request.locals.jwt;
	const { access_token, userId } = getUserToken(jwt);

	if (access_token && userId) {
		return {
			status: 200,
			body: { token: access_token, userId },
		};
	} else {
		logger.warn('Failed to get pubsub info');
		return { status: 404, body: 'Failed to get pubsub info for user' };
	}
}
