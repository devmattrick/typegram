/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import Sticker from './Sticker';

/**
 * This object represents a sticker set.
 */
export default interface StickerSet extends Schema {
    /**
     * Sticker set name
     */
    name: string;

    /**
     * Sticker set title
     */
    title: string;

    /**
     * True, if the sticker set contains animated stickers
     */
    is_animated: boolean;

    /**
     * True, if the sticker set contains masks
     */
    contains_masks: boolean;

    /**
     * List of all set stickers
     */
    stickers: Sticker[];
}
