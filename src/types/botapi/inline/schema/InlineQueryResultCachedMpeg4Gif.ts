/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import InlineKeyboardMarkup from './../../core/schema/InlineKeyboardMarkup';
import InputContactMessageContent from './InputContactMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputTextMessageContent from './InputTextMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 */
export default interface InlineQueryResultCachedMpeg4Gif extends Schema {
    /**
     * Type of the result, must be mpeg4_gif
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;

    /**
     * A valid file identifier for the MP4 file
     */
    mpeg4_file_id: string;

    /**
     * Optional. Title for the result
     */
    title?: string;

    /**
     * Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
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
     * Optional. Content of the message to be sent instead of the video animation
     */
    input_message_content?:
        | InputTextMessageContent
        | InputLocationMessageContent
        | InputVenueMessageContent
        | InputContactMessageContent;
}
