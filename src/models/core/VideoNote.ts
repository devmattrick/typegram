import PhotoSize from './PhotoSize';

/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 */
export default interface VideoNote {
    /**
     * Unique identifier for this file
     */
    file_id: string;

    /**
     * Video width and height (diameter of the video message) as defined by sender
     */
    length: number;

    /**
     * Duration of the video in seconds as defined by sender
     */
    duration: number;

    /**
     * Optional. Video thumbnail
     */
    thumb?: PhotoSize;

    /**
     * Optional. File size
     */
    file_size?: number;
}
