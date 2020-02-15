/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import InlineKeyboardMarkup from './../../core/schema/InlineKeyboardMarkup';
import InputContactMessageContent from './InputContactMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputTextMessageContent from './InputTextMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';

/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 */
export default interface InlineQueryResultCachedDocument extends Schema {
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
     * A valid file identifier for the file
     */
    document_file_id: string;

    /**
     * Optional. Short description of the result
     */
    description?: string;

    /**
     * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
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
     * Optional. Content of the message to be sent instead of the file
     */
    input_message_content?:
        | InputTextMessageContent
        | InputLocationMessageContent
        | InputVenueMessageContent
        | InputContactMessageContent;
}
