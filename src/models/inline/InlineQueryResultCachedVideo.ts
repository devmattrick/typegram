import InlineKeyboardMarkup from '../core/InlineKeyboardMarkup';
import InputMessageContent from './InputMessageContent';

/**
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the
 * user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified
 * content instead of the video.
 */
export default interface InlineQueryResultCachedVideo {
    /**
     * Type of the result, must be video
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;

    /**
     * A valid file identifier for the video file
     */
    video_file_id: string;

    /**
     * Title for the result
     */
    title: string;

    /**
     * Optional. Short description of the result
     */
    description?: string;

    /**
     * Optional. Caption of the video to be sent, 0-1024 characters
     */
    caption?: string;

    /**
     * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in
     * the media caption.
     */
    parse_mode?: string;

    /**
     * Optional. Inline keyboard attached to the message
     */
    reply_markup?: InlineKeyboardMarkup;

    /**
     * Optional. Content of the message to be sent instead of the video
     */
    input_message_content?: InputMessageContent;
}
