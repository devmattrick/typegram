/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import ForceReply from './../schema/ForceReply';
import InlineKeyboardMarkup from './../schema/InlineKeyboardMarkup';
import ReplyKeyboardMarkup from './../schema/ReplyKeyboardMarkup';
import ReplyKeyboardRemove from './../schema/ReplyKeyboardRemove';

/**
 * Use this method to send photos. On success, the sent Message is returned.
 */
type SendPhoto = Method<
    'sendPhoto',
    {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id: number | string;
        /**
         * Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. More info on Sending Files »
         */
        photo: InputFile | string;
        /**
         * Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
         */
        caption?: string;
        /**
         * Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in the media caption.
         */
        parse_mode?: string;
        /**
         * Sends the message silently. Users will receive a notification with no sound.
         */
        disable_notification?: boolean;
        /**
         * If the message is a reply, ID of the original message
         */
        reply_to_message_id?: number;
        /**
         * Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
         */
        reply_markup?:
            | InlineKeyboardMarkup
            | ReplyKeyboardMarkup
            | ReplyKeyboardRemove
            | ForceReply;
    },
    unknown
>;

export default SendPhoto;
