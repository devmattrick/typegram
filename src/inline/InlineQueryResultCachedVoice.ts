import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by
 * the user. Alternatively, you can use input_message_content to send a message with the specified content instead of
 * the voice message.
 */
export default interface InlineQueryResultCachedVoice {
  /**
   * Type of the result, must be voice
   */
  type: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the voice message
   */
  voice_file_id: string;

  /**
   * Voice message title
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
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the voice message
   */
  input_message_content?: InputMessageContent;

}
