/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to delete a sticker from a set created by the bot. Returns True on success.
 */
type DeleteStickerFromSet = Method<
    'deleteStickerFromSet',
    {
        /**
         * File identifier of the sticker
         */
        sticker: string;
    },
    unknown
>;

export default DeleteStickerFromSet;
