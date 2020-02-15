/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as String on success.
 */
type ExportChatInviteLink = Method<
    'exportChatInviteLink',
    {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id: number | string;
    },
    unknown
>;

export default ExportChatInviteLink;
