/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import InlineKeyboardMarkup from './../schema/InlineKeyboardMarkup';

/**
 * Use this method to stop updating a live location message before live_period expires. On success, if the message was sent by the bot, the sent Message is returned, otherwise True is returned.
 */
type StopMessageLiveLocation = Method<
    'stopMessageLiveLocation',
    {
        /**
         * Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id?: number | string;
        /**
         * Required if inline_message_id is not specified. Identifier of the message with live location to stop
         */
        message_id?: number;
        /**
         * Required if chat_id and message_id are not specified. Identifier of the inline message
         */
        inline_message_id?: string;
        /**
         * A JSON-serialized object for a new inline keyboard.
         */
        reply_markup?: InlineKeyboardMarkup;
    },
    unknown
>;

export default StopMessageLiveLocation;
