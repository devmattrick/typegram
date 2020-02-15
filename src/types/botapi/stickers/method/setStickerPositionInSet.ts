/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to move a sticker in a set created by the bot to a specific position . Returns True on success.
 */
type SetStickerPositionInSet = Method<
    'setStickerPositionInSet',
    {
        /**
         * File identifier of the sticker
         */
        sticker: string;
        /**
         * New sticker position in the set, zero-based
         */
        position: number;
    },
    unknown
>;

export default SetStickerPositionInSet;
