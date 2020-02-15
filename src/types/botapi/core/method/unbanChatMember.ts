/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to unban a previously kicked user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. Returns True on success.
 */
type UnbanChatMember = Method<
    'unbanChatMember',
    {
        /**
         * Unique identifier for the target group or username of the target supergroup or channel (in the format @username)
         */
        chat_id: number | string;
        /**
         * Unique identifier of the target user
         */
        user_id: number;
    },
    unknown
>;

export default UnbanChatMember;
