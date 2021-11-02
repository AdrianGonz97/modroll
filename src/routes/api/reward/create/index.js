import logger from '$logger';
import { getAccessToken } from '$util/jwt';
import { post as twitchPost } from '$util/twitch/api';

export async function post(request) {
	logger.info('Creating user reward');
	const jwt = request.locals.jwt;
	const broadcasterId = request.locals.broadcasterId;
	const accessToken = getAccessToken(jwt);

	const reqBody = JSON.parse(request.body);

	const params = new Map();
	params.set('broadcaster_id', broadcasterId);

	const body = {
		title: reqBody.title,
		cost: reqBody.cost,
		prompt: reqBody.prompt,
		is_user_input_required: true,
		is_enabled: false,
	};

	try {
		const resp = await twitchPost(
			'channel_points/custom_rewards',
			JSON.stringify(body),
			accessToken,
			params
		);
		if (resp.ok) {
			logger.info('Got newly created custom reward');
			const data = await resp.json();
			const reward = data.data[0];

			return {
				status: 200,
				body: {
					id: reward.id,
					title: reward.title,
					prompt: reward.prompt,
					cost: reward.cost,
					isEnabled: reward.is_enabled,
					isUserInputRequired: reward.is_user_input_required,
					isPaused: reward.is_paused,
					isInStock: reward.is_in_stock,
					globalCooldownSetting: reward.global_cooldown_setting,
					cooldownExpiresAt: reward.cooldown_expires_at,
				},
			};
		}
		logger.warn('Failed to create user rewards');
		return { status: resp.status, body: resp.body };
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
