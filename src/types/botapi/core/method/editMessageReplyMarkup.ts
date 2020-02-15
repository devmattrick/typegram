/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import InlineKeyboardMarkup from './../schema/InlineKeyboardMarkup';

/**
 * Use this method to edit only the reply markup of messages. On success, if edited message is sent by the bot, the edited Message is returned, otherwise True is returned.
 */
type EditMessageReplyMarkup = Method<
    'editMessageReplyMarkup',
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
         * A JSON-serialized object for an inline keyboard.
         */
        reply_markup?: InlineKeyboardMarkup;
    },
    unknown
>;

export default EditMessageReplyMarkup;
