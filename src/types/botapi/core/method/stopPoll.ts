/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import InlineKeyboardMarkup from './../schema/InlineKeyboardMarkup';

/**
 * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll with the final results is returned.
 */
type StopPoll = Method<
    'stopPoll',
    {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id: number | string;
        /**
         * Identifier of the original message with the poll
         */
        message_id: number;
        /**
         * A JSON-serialized object for a new message inline keyboard.
         */
        reply_markup?: InlineKeyboardMarkup;
    },
    unknown
>;

export default StopPoll;
