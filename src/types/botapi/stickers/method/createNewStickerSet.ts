/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import MaskPosition from './../schema/MaskPosition';

/**
 * Use this method to create new sticker set owned by a user. The bot will be able to edit the created sticker set. Returns True on success.
 */
type CreateNewStickerSet = Method<
    'createNewStickerSet',
    {
        /**
         * User identifier of created sticker set owner
         */
        user_id: number;
        /**
         * Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot username>". <bot_username> is case insensitive. 1-64 characters.
         */
        name: string;
        /**
         * Sticker set title, 1-64 characters
         */
        title: string;
        /**
         * Png image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
         */
        png_sticker: InputFile | string;
        /**
         * One or more emoji corresponding to the sticker
         */
        emojis: string;
        /**
         * Pass True, if a set of mask stickers should be created
         */
        contains_masks?: boolean;
        /**
         * A JSON-serialized object for position where the mask should be placed on faces
         */
        mask_position?: MaskPosition;
    },
    unknown
>;

export default CreateNewStickerSet;
