/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format
 * when decrypted and don&#x27;t exceed 10MB.
 */
export default interface PassportFile {
  /**
   * Unique identifier for this file
   */
  file_id: string;

  /**
   * File size
   */
  file_size: number;

  /**
   * Unix time when the file was uploaded
   */
  file_date: number;

}
