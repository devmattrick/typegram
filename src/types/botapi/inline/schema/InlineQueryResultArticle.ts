/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import InlineKeyboardMarkup from './../../core/schema/InlineKeyboardMarkup';
import InputContactMessageContent from './InputContactMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputTextMessageContent from './InputTextMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';

/**
 * Represents a link to an article or web page.
 */
export default interface InlineQueryResultArticle extends Schema {
    /**
     * Type of the result, must be article
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 Bytes
     */
    id: string;

    /**
     * Title of the result
     */
    title: string;

    /**
     * Content of the message to be sent
     */
    input_message_content:
        | InputTextMessageContent
        | InputLocationMessageContent
        | InputVenueMessageContent
        | InputContactMessageContent;

    /**
     * Optional. Inline keyboard attached to the message
     */
    reply_markup?: InlineKeyboardMarkup;

    /**
     * Optional. URL of the result
     */
    url?: string;

    /**
     * Optional. Pass True, if you don't want the URL to be shown in the message
     */
    hide_url?: boolean;

    /**
     * Optional. Short description of the result
     */
    description?: string;

    /**
     * Optional. Url of the thumbnail for the result
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
