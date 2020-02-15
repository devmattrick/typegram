/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to get a sticker set. On success, a StickerSet object is returned.
 */
type GetStickerSet = Method<
    'getStickerSet',
    {
        /**
         * Name of the sticker set
         */
        name: string;
    },
    unknown
>;

export default GetStickerSet;
