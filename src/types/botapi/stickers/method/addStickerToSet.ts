/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import MaskPosition from './../schema/MaskPosition';

/**
 * Use this method to add a new sticker to a set created by the bot. Returns True on success.
 */
type AddStickerToSet = Method<
    'addStickerToSet',
    {
        /**
         * User identifier of sticker set owner
         */
        user_id: number;
        /**
         * Sticker set name
         */
        name: string;
        /**
         * Png image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
         */
        png_sticker: InputFile | string;
        /**
         * One or more emoji corresponding to the sticker
         */
        emojis: string;
        /**
         * A JSON-serialized object for position where the mask should be placed on faces
         */
        mask_position?: MaskPosition;
    },
    unknown
>;

export default AddStickerToSet;
