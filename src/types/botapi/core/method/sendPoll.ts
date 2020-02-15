/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import ForceReply from './../schema/ForceReply';
import InlineKeyboardMarkup from './../schema/InlineKeyboardMarkup';
import ReplyKeyboardMarkup from './../schema/ReplyKeyboardMarkup';
import ReplyKeyboardRemove from './../schema/ReplyKeyboardRemove';

/**
 * Use this method to send a native poll. On success, the sent Message is returned.
 */
type SendPoll = Method<
    'sendPoll',
    {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id: number | string;
        /**
         * Poll question, 1-255 characters
         */
        question: string;
        /**
         * A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
         */
        options: string[];
        /**
         * True, if the poll needs to be anonymous, defaults to True
         */
        is_anonymous?: boolean;
        /**
         * Poll type, "quiz" or "regular", defaults to "regular"
         */
        type?: string;
        /**
         * True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
         */
        allows_multiple_answers?: boolean;
        /**
         * 0-based identifier of the correct answer option, required for polls in quiz mode
         */
        correct_option_id?: number;
        /**
         * Pass True, if the poll needs to be immediately closed. This can be useful for poll preview.
         */
        is_closed?: boolean;
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

export default SendPoll;
