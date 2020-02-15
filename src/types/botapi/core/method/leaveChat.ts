/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
 */
type LeaveChat = Method<
    'leaveChat',
    {
        /**
         * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
         */
        chat_id: number | string;
    },
    unknown
>;

export default LeaveChat;
