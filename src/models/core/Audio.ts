import * as JT from '@mojotech/json-type-validation';

import PhotoSize, { PhotoSizeDecoder } from './PhotoSize';

/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 */
export default interface Audio {
    /**
     * Unique identifier for this file
     */
    file_id: string;

    /**
     * Duration of the audio in seconds as defined by sender
     */
    duration: number;

    /**
     * Optional. Performer of the audio as defined by sender or by audio tags
     */
    performer?: string;

    /**
     * Optional. Title of the audio as defined by sender or by audio tags
     */
    title?: string;

    /**
     * Optional. MIME type of the file as defined by sender
     */
    mime_type?: string;

    /**
     * Optional. File size
     */
    file_size?: number;

    /**
     * Optional. Thumbnail of the album cover to which the music file belongs
     */
    thumb?: PhotoSize;
}

export const AudioDecoder: JT.Decoder<Audio> = JT.object({
    file_id: JT.string(),
    duration: JT.number(),
    performer: JT.optional(JT.string()),
    title: JT.optional(JT.string()),
    mime_type: JT.optional(JT.string()),
    file_size: JT.optional(JT.number()),
    thumb: JT.optional(PhotoSizeDecoder),
});
