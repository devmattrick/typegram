/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import InlineKeyboardMarkup from './../../core/schema/InlineKeyboardMarkup';
import InputContactMessageContent from './InputContactMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputTextMessageContent from './InputTextMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';

/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 */
export default interface InlineQueryResultPhoto extends Schema {
    /**
     * Type of the result, must be photo
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;

    /**
     * A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB
     */
    photo_url: string;

    /**
     * URL of the thumbnail for the photo
     */
    thumb_url: string;

    /**
     * Optional. Width of the photo
     */
    photo_width?: number;

    /**
     * Optional. Height of the photo
     */
    photo_height?: number;

    /**
     * Optional. Title for the result
     */
    title?: string;

    /**
     * Optional. Short description of the result
     */
    description?: string;

    /**
     * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
     */
    caption?: string;

    /**
     * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.
     */
    parse_mode?: string;

    /**
     * Optional. Inline keyboard attached to the message
     */
    reply_markup?: InlineKeyboardMarkup;

    /**
     * Optional. Content of the message to be sent instead of the photo
     */
    input_message_content?:
        | InputTextMessageContent
        | InputLocationMessageContent
        | InputVenueMessageContent
        | InputContactMessageContent;
}
