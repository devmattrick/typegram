import * as JT from '@mojotech/json-type-validation';

import PhotoSize, { PhotoSizeDecoder } from './PhotoSize';

/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 */
export default interface Animation {
    /**
     * Unique file identifier
     */
    file_id: string;

    /**
     * Video width as defined by sender
     */
    width: number;

    /**
     * Video height as defined by sender
     */
    height: number;

    /**
     * Duration of the video in seconds as defined by sender
     */
    duration: number;

    /**
     * Optional. Animation thumbnail as defined by sender
     */
    thumb?: PhotoSize;

    /**
     * Optional. Original animation filename as defined by sender
     */
    file_name?: string;

    /**
     * Optional. MIME type of the file as defined by sender
     */
    mime_type?: string;

    /**
     * Optional. File size
     */
    file_size?: number;
}

export const AnimationDecoder: JT.Decoder<Animation> = JT.object({
    file_id: JT.string(),
    width: JT.number(),
    height: JT.number(),
    duration: JT.number(),
    thumb: JT.optional(PhotoSizeDecoder),
    file_name: JT.optional(JT.string()),
    mime_type: JT.optional(JT.string()),
    file_size: JT.optional(JT.number()),
});
