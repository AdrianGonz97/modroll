import { getAccessToken } from '../../../../util/jwt';
import { get as twitchGet } from '../../../../util/twitch/api';

export async function get(request) {
	console.log('Getting user rewards');
	const jwt = request.locals.jwt;
	const broadcasterId = request.locals.broadcasterId;
	const accessToken = getAccessToken(jwt);
	const params = new Map();

	params.set('broadcaster_id', broadcasterId);
	params.set('only_manageable_rewards', 'true');

	try {
		const resp = await twitchGet(
			'channel_points/custom_rewards',
			accessToken,
			params
		);
		if (resp.ok) {
			console.log('Got custom rewards');
			const data = await resp.json();
			const rewards = data.data.map((val) => {
				return {
					id: val.id,
					title: val.title,
					prompt: val.prompt,
					cost: val.cost,
					isEnabled: val.is_enabled,
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
		console.log('[ERR]: Failed to get user rewards!');
		return { status: resp.status, body: resp.body };
	} catch (err) {
		console.error(err);
		return { status: 404, body: err.message };
	}
}
