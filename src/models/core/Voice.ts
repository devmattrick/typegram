import * as JT from '@mojotech/json-type-validation';

/**
 * This object represents a voice note.
 */
export default interface Voice {
    /**
     * Unique identifier for this file
     */
    file_id: string;

    /**
     * Duration of the audio in seconds as defined by sender
     */
    duration: number;

    /**
     * Optional. MIME type of the file as defined by sender
     */
    mime_type?: string;

    /**
     * Optional. File size
     */
    file_size?: number;
}

export const VoiceDecoder: JT.Decoder<Voice> = JT.object({
    file_id: JT.string(),
    duration: JT.number(),
    mime_type: JT.optional(JT.string()),
    file_size: JT.optional(JT.number()),
});
