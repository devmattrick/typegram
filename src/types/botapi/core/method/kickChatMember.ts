/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
 */
type KickChatMember = Method<
    'kickChatMember',
    {
        /**
         * Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)
         */
        chat_id: number | string;
        /**
         * Unique identifier of the target user
         */
        user_id: number;
        /**
         * Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever
         */
        until_date?: number;
    },
    unknown
>;

export default KickChatMember;
