/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import InlineKeyboardMarkup from './../schema/InlineKeyboardMarkup';
import InputMediaAnimation from './../schema/InputMediaAnimation';
import InputMediaAudio from './../schema/InputMediaAudio';
import InputMediaDocument from './../schema/InputMediaDocument';
import InputMediaPhoto from './../schema/InputMediaPhoto';
import InputMediaVideo from './../schema/InputMediaVideo';

/**
 * Use this method to edit animation, audio, document, photo, or video messages. If a message is a part of a message album, then it can be edited only to a photo or a video. Otherwise, message type can be changed arbitrarily. When inline message is edited, new file can't be uploaded. Use previously uploaded file via its file_id or specify a URL. On success, if the edited message was sent by the bot, the edited Message is returned, otherwise True is returned.
 */
type EditMessageMedia = Method<
    'editMessageMedia',
    {
        /**
         * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id?: number | string;
        /**
         * Required if inline_message_id is not specified. Identifier of the message to edit
         */
        message_id?: number;
        /**
         * Required if chat_id and message_id are not specified. Identifier of the inline message
         */
        inline_message_id?: string;
        /**
         * A JSON-serialized object for a new media content of the message
         */
        media:
            | InputMediaPhoto
            | InputMediaVideo
            | InputMediaAnimation
            | InputMediaAudio
            | InputMediaDocument;
        /**
         * A JSON-serialized object for a new inline keyboard.
         */
        reply_markup?: InlineKeyboardMarkup;
    },
    unknown
>;

export default EditMessageMedia;
