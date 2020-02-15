/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to unpin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in the supergroup or 'can_edit_messages' admin right in the channel. Returns True on success.
 */
type UnpinChatMessage = Method<
    'unpinChatMessage',
    {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id: number | string;
    },
    unknown
>;

export default UnpinChatMessage;
