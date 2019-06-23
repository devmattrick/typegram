import InlineKeyboardMarkup from '../core/InlineKeyboardMarkup';
import InputMessageContent from './InputMessageContent';

/**
 * Represents a link to a voice recording in an .ogg container encoded with OPUS. By default, this voice recording will
 * be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content
 * instead of the the voice message.
 */
export default interface InlineQueryResultVoice {
    /**
     * Type of the result, must be voice
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 bytes
     */
    id: string;

    /**
     * A valid URL for the voice recording
     */
    voice_url: string;

    /**
     * Recording title
     */
    title: string;

    /**
     * Optional. Caption, 0-1024 characters
     */
    caption?: string;

    /**
     * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in
     * the media caption.
     */
    parse_mode?: string;

    /**
     * Optional. Recording duration in seconds
     */
    voice_duration?: number;

    /**
     * Optional. Inline keyboard attached to the message
     */
    reply_markup?: InlineKeyboardMarkup;

    /**
     * Optional. Content of the message to be sent instead of the voice recording
     */
    input_message_content?: InputMessageContent;
}
