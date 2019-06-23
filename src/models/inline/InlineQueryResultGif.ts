import InlineKeyboardMarkup from '../core/InlineKeyboardMarkup';
import InputMessageContent from './InputMessageContent';

/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional
 * caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the
 * animation.
 */
export default interface InlineQueryResultGif {
    /**
     * Type of the result, must be gif
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;

    /**
     * A valid URL for the GIF file. File size must not exceed 1MB
     */
    gif_url: string;

    /**
     * Optional. Width of the GIF
     */
    gif_width?: number;

    /**
     * Optional. Height of the GIF
     */
    gif_height?: number;

    /**
     * Optional. Duration of the GIF
     */
    gif_duration?: number;

    /**
     * URL of the static thumbnail for the result (jpeg or gif)
     */
    thumb_url: string;

    /**
     * Optional. Title for the result
     */
    title?: string;

    /**
     * Optional. Caption of the GIF file to be sent, 0-1024 characters
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
     * Optional. Content of the message to be sent instead of the GIF animation
     */
    input_message_content?: InputMessageContent;
}
