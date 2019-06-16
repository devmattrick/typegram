import User from "./User";

/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 */
export default interface MessageEntity {
  /**
   * Type of the entity. Can be mention (@username), hashtag, cashtag, bot_command, url, email, phone_number, bold (bold
   * text), italic (italic text), code (monowidth string), pre (monowidth block), text_link (for clickable text URLs),
   * text_mention (for users without usernames)
   */
  type: string;

  /**
   * Offset in UTF-16 code units to the start of the entity
   */
  offset: number;

  /**
   * Length of the entity in UTF-16 code units
   */
  length: number;

  /**
   * Optional. For “text_link” only, url that will be opened after user taps on the text
   */
  url?: string;

  /**
   * Optional. For “text_mention” only, the mentioned user
   */
  user?: User;

}
