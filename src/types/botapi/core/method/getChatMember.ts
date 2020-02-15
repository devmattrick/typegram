/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to get information about a member of a chat. Returns a ChatMember object on success.
 */
type GetChatMember = Method<
    'getChatMember',
    {
        /**
         * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
         */
        chat_id: number | string;
        /**
         * Unique identifier of the target user
         */
        user_id: number;
    },
    unknown
>;

export default GetChatMember;
