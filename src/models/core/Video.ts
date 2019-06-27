import * as JT from '@mojotech/json-type-validation';

import PhotoSize, { PhotoSizeDecoder } from './PhotoSize';

/**
 * This object represents a video file.
 */
export default interface Video {
    /**
     * Unique identifier for this file
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
     * Optional. Video thumbnail
     */
    thumb?: PhotoSize;

    /**
     * Optional. Mime type of a file as defined by sender
     */
    mime_type?: string;

    /**
     * Optional. File size
     */
    file_size?: number;
}

export const VideoDecoder: JT.Decoder<Video> = JT.object({
    file_id: JT.string(),
    width: JT.number(),
    height: JT.number(),
    duration: JT.number(),
    thumb: JT.optional(PhotoSizeDecoder),
    mime_type: JT.optional(JT.string()),
    file_size: JT.optional(JT.number()),
});
