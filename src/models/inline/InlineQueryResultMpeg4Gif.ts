import InlineKeyboardMarkup from '../core/InlineKeyboardMarkup';
import InputMessageContent from './InputMessageContent';

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file
 * will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message
 * with the specified content instead of the animation.
 */
export default interface InlineQueryResultMpeg4Gif {
    /**
     * Type of the result, must be mpeg4_gif
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;

    /**
     * A valid URL for the MP4 file. File size must not exceed 1MB
     */
    mpeg4_url: string;

    /**
     * Optional. Video width
     */
    mpeg4_width?: number;

    /**
     * Optional. Video height
     */
    mpeg4_height?: number;

    /**
     * Optional. Video duration
     */
    mpeg4_duration?: number;

    /**
     * URL of the static thumbnail (jpeg or gif) for the result
     */
    thumb_url: string;

    /**
     * Optional. Title for the result
     */
    title?: string;

    /**
     * Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters
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
     * Optional. Content of the message to be sent instead of the video animation
     */
    input_message_content?: InputMessageContent;
}
