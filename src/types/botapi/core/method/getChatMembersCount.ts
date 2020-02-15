/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to get the number of members in a chat. Returns Int on success.
 */
type GetChatMembersCount = Method<
    'getChatMembersCount',
    {
        /**
         * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername)
         */
        chat_id: number | string;
    },
    unknown
>;

export default GetChatMembersCount;
