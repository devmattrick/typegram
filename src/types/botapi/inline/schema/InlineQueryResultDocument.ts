/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import InlineKeyboardMarkup from './../../core/schema/InlineKeyboardMarkup';
import InputContactMessageContent from './InputContactMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputTextMessageContent from './InputTextMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';

/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 */
export default interface InlineQueryResultDocument extends Schema {
    /**
     * Type of the result, must be document
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;

    /**
     * Title for the result
     */
    title: string;

    /**
     * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
     */
    caption?: string;

    /**
     * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.
     */
    parse_mode?: string;

    /**
     * A valid URL for the file
     */
    document_url: string;

    /**
     * Mime type of the content of the file, either "application/pdf" or "application/zip"
     */
    mime_type: string;

    /**
     * Optional. Short description of the result
     */
    description?: string;

    /**
     * Optional. Inline keyboard attached to the message
     */
    reply_markup?: InlineKeyboardMarkup;

    /**
     * Optional. Content of the message to be sent instead of the file
     */
    input_message_content?:
        | InputTextMessageContent
        | InputLocationMessageContent
        | InputVenueMessageContent
        | InputContactMessageContent;

    /**
     * Optional. URL of the thumbnail (jpeg only) for the file
     */
    thumb_url?: string;

    /**
     * Optional. Thumbnail width
     */
    thumb_width?: number;

    /**
     * Optional. Thumbnail height
     */
    thumb_height?: number;
}
