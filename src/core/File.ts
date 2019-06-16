/**
 * Maximum file size to download is 20 MB
 *
 * This object represents a file ready to be downloaded. The file can be downloaded via the link
 * https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;. It is guaranteed that the link will be valid for at
 * least 1 hour. When the link expires, a new one can be requested by calling getFile.
 */
export default interface File {
  /**
   * Unique identifier for this file
   */
  file_id: string;

  /**
   * Optional. File size, if known
   */
  file_size?: number;

  /**
   * Optional. File path. Use https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt; to get the file.
   */
  file_path?: string;

}
