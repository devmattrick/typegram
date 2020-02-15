/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 */
type DeleteChatStickerSet = Method<
    'deleteChatStickerSet',
    {
        /**
         * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
         */
        chat_id: number | string;
    },
    unknown
>;

export default DeleteChatStickerSet;
