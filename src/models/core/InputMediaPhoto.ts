/**
 * Represents a photo to be sent.
 */
export default interface InputMediaPhoto {
    /**
     * Type of the result, must be photo
     */
    type: string;

    /**
     * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for
     * Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using
     * multipart/form-data under &lt;file_attach_name&gt; name.
     */
    media: string;

    /**
     * Optional. Caption of the photo to be sent, 0-1024 characters
     */
    caption?: string;

    /**
     * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in
     * the media caption.
     */
    parse_mode?: string;
}
