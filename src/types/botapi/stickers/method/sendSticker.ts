/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import ForceReply from './../../core/schema/ForceReply';
import InlineKeyboardMarkup from './../../core/schema/InlineKeyboardMarkup';
import ReplyKeyboardMarkup from './../../core/schema/ReplyKeyboardMarkup';
import ReplyKeyboardRemove from './../../core/schema/ReplyKeyboardRemove';

/**
 * Use this method to send static .WEBP or animated .TGS stickers. On success, the sent Message is returned.
 */
type SendSticker = Method<
    'sendSticker',
    {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id: number | string;
        /**
         * Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .webp file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
         */
        sticker: InputFile | string;
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

export default SendSticker;
