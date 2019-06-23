import PhotoSize from './PhotoSize';

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
