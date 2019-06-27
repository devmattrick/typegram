import * as JT from '@mojotech/json-type-validation';

import PhotoSize, { PhotoSizeDecoder } from '../core/PhotoSize';
import MaskPosition, { MaskPositionDecoder } from './MaskPosition';

/**
 * This object represents a sticker.
 */
export default interface Sticker {
    /**
     * Unique identifier for this file
     */
    file_id: string;

    /**
     * Sticker width
     */
    width: number;

    /**
     * Sticker height
     */
    height: number;

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

export const StickerDecoder: JT.Decoder<Sticker> = JT.object({
    file_id: JT.string(),
    width: JT.number(),
    height: JT.number(),
    thumb: JT.optional(PhotoSizeDecoder),
    emoji: JT.optional(JT.string()),
    set_name: JT.optional(JT.string()),
    mask_position: JT.optional(MaskPositionDecoder),
    file_size: JT.optional(JT.number()),
});
