/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import MaskPosition from './MaskPosition';
import PhotoSize from './../../core/schema/PhotoSize';

/**
 * This object represents a sticker.
 */
export default interface Sticker extends Schema {
    /**
     * Identifier for this file, which can be used to download or reuse the file
     */
    file_id: string;

    /**
     * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
     */
    file_unique_id: string;

    /**
     * Sticker width
     */
    width: number;

    /**
     * Sticker height
     */
    height: number;

    /**
     * True, if the sticker is animated
     */
    is_animated: boolean;

    /**
     * Optional. Sticker thumbnail in the .webp or .jpg format
     */
    thumb?: PhotoSize;

    /**
     * Optional. Emoji associated with the sticker
     */
    emoji?: string;

    /**
     * Optional. Name of the sticker set to which the sticker belongs
     */
    set_name?: string;

    /**
     * Optional. For mask stickers, the position where the mask should be placed
     */
    mask_position?: MaskPosition;

    /**
     * Optional. File size
     */
    file_size?: number;
}
