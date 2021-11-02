import logger from '$logger';
import { getUserToken } from '$util/jwt';
import { get as twitchGet } from '$util/twitch/api';

export async function get(request) {
	logger.info('Getting user rewards');
	const jwt = request.locals.jwt;
	const { access_token, userId } = getUserToken(jwt);
	const params = new Map();

	params.set('broadcaster_id', userId);
	params.set('only_manageable_rewards', 'true');

	try {
		const resp = await twitchGet(
			'channel_points/custom_rewards',
			access_token,
			params
		);
		if (resp.ok) {
			logger.info('Got custom rewards');
			const data = await resp.json();
			const rewards = data.data.map((val) => {
				return {
					id: val.id,
					title: val.title,
					prompt: val.prompt,
					cost: val.cost,
					isActive: val.is_enabled,
					isUserInputRequired: val.is_user_input_required,
					isPaused: val.is_paused,
					isInStock: val.is_in_stock,
					globalCooldownSetting: val.global_cooldown_setting,
					cooldownExpiresAt: val.cooldown_expires_at,
				};
			});

			return {
				status: 200,
				body: {
					rewards,
				},
			};
		}
		logger.warn('Failed to get user rewards');
		return { status: resp.status, body: resp.body };
	} catch (err) {
		logger.error(err.message);
		return { status: 404, body: err.message };
	}
}
