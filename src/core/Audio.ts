import PhotoSize from "./PhotoSize";

/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 */
export default interface Audio {
  /**
   * Unique identifier for this file
   */
  file_id: string;

  /**
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;

  /**
   * Optional. Performer of the audio as defined by sender or by audio tags
   */
  performer?: string;

  /**
   * Optional. Title of the audio as defined by sender or by audio tags
   */
  title?: string;

  /**
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;

  /**
   * Optional. File size
   */
  file_size?: number;

  /**
   * Optional. Thumbnail of the album cover to which the music file belongs
   */
  thumb?: PhotoSize;

}
