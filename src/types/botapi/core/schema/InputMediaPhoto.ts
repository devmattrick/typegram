/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';

/**
 * Represents a photo to be sent.
 */
export default interface InputMediaPhoto extends Schema {
    /**
     * Type of the result, must be photo
     */
    type: string;

    /**
     * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using multipart/form-data under <file_attach_name> name. More info on Sending Files »
     */
    media: string;

    /**
     * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
     */
    caption?: string;

    /**
     * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.
     */
    parse_mode?: string;
}
