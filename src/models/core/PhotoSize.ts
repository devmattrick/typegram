import * as JT from '@mojotech/json-type-validation';

/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 */
export default interface PhotoSize {
    /**
     * Unique identifier for this file
     */
    file_id: string;

    /**
     * Photo width
     */
    width: number;

    /**
     * Photo height
     */
    height: number;

    /**
     * Optional. File size
     */
    file_size?: number;
}

export const PhotoSizeDecoder: JT.Decoder<PhotoSize> = JT.object({
    file_id: JT.string(),
    width: JT.number(),
    height: JT.number(),
    file_size: JT.optional(JT.number()),
});
