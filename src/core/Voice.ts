/**
 * This object represents a voice note.
 */
export default interface Voice {
  /**
   * Unique identifier for this file
   */
  file_id: string;

  /**
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;

  /**
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;

  /**
   * Optional. File size
   */
  file_size?: number;

}
