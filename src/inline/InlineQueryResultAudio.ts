import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to an mp3 audio file. By default, this audio file will be sent by the user. Alternatively, you can
 * use input_message_content to send a message with the specified content instead of the audio.
 */
export default interface InlineQueryResultAudio {
  /**
   * Type of the result, must be audio
   */
  type: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the audio file
   */
  audio_url: string;

  /**
   * Title
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
   * Optional. Performer
   */
  performer?: string;

  /**
   * Optional. Audio duration in seconds
   */
  audio_duration?: number;

  /**
   * Optional. Inline keyboard attached to the message
   */
  reply_markup?: InlineKeyboardMarkup;

  /**
   * Optional. Content of the message to be sent instead of the audio
   */
  input_message_content?: InputMessageContent;

}
