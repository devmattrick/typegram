/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 *
 * This method will currently return scores for the target user, plus two of his closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.
 *
 * Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an Array of GameHighScore objects.
 */
type GetGameHighScores = Method<
    'getGameHighScores',
    {
        /**
         * Target user id
         */
        user_id: number;
        /**
         * Required if inline_message_id is not specified. Unique identifier for the target chat
         */
        chat_id?: number;
        /**
         * Required if inline_message_id is not specified. Identifier of the sent message
         */
        message_id?: number;
        /**
         * Required if chat_id and message_id are not specified. Identifier of the inline message
         */
        inline_message_id?: string;
    },
    unknown
>;

export default GetGameHighScores;
