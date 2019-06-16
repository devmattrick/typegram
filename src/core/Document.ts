import PhotoSize from "./PhotoSize";

/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 */
export default interface Document {
  /**
   * Unique file identifier
   */
  file_id: string;

  /**
   * Optional. Document thumbnail as defined by sender
   */
  thumb?: PhotoSize;

  /**
   * Optional. Original filename as defined by sender
   */
  file_name?: string;

  /**
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;

  /**
   * Optional. File size
   */
  file_size?: number;

}
