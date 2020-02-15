/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import InlineKeyboardMarkup from './../../core/schema/InlineKeyboardMarkup';

/**
 * Use this method to send a game. On success, the sent Message is returned.
 */
type SendGame = Method<
    'sendGame',
    {
        /**
         * Unique identifier for the target chat
         */
        chat_id: number;
        /**
         * Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather.
         */
        game_short_name: string;
        /**
         * Sends the message silently. Users will receive a notification with no sound.
         */
        disable_notification?: boolean;
        /**
         * If the message is a reply, ID of the original message
         */
        reply_to_message_id?: number;
        /**
         * A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
         */
        reply_markup?: InlineKeyboardMarkup;
    },
    unknown
>;

export default SendGame;
