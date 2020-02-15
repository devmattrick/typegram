/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to upload a .png file with a sticker for later use in createNewStickerSet and addStickerToSet methods (can be used multiple times). Returns the uploaded File on success.
 */
type UploadStickerFile = Method<
    'uploadStickerFile',
    {
        /**
         * User identifier of sticker file owner
         */
        user_id: number;
        /**
         * Png image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. More info on Sending Files »
         */
        png_sticker: InputFile;
    },
    unknown
>;

export default UploadStickerFile;
