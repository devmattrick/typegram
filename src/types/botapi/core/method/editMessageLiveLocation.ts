/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import InlineKeyboardMarkup from './../schema/InlineKeyboardMarkup';

/**
 * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message was sent by the bot, the edited Message is returned, otherwise True is returned.
 */
type EditMessageLiveLocation = Method<
    'editMessageLiveLocation',
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
         * Latitude of new location
         */
        latitude: number;
        /**
         * Longitude of new location
         */
        longitude: number;
        /**
         * A JSON-serialized object for a new inline keyboard.
         */
        reply_markup?: InlineKeyboardMarkup;
    },
    unknown
>;

export default EditMessageLiveLocation;
