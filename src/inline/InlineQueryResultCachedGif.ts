import InlineKeyboardMarkup from "../core/InlineKeyboardMarkup";
import InputMessageContent from "./InputMessageContent";

/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be
 * sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with
 * specified content instead of the animation.
 */
export default interface InlineQueryResultCachedGif {
  /**
   * Type of the result, must be gif
   */
  type: string;

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the GIF file
   */
  gif_file_id: string;

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
