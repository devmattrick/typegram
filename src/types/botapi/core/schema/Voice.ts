/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';

/**
 * This object represents a voice note.
 */
export default interface Voice extends Schema {
    /**
     * Identifier for this file, which can be used to download or reuse the file
     */
    file_id: string;

    /**
     * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
     */
    file_unique_id: string;

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
