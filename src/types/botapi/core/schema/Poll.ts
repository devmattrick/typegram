/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import PollOption from './PollOption';

/**
 * This object contains information about a poll.
 */
export default interface Poll extends Schema {
    /**
     * Unique poll identifier
     */
    id: string;

    /**
     * Poll question, 1-255 characters
     */
    question: string;

    /**
     * List of poll options
     */
    options: PollOption[];

    /**
     * Total number of users that voted in the poll
     */
    total_voter_count: number;

    /**
     * True, if the poll is closed
     */
    is_closed: boolean;

    /**
     * True, if the poll is anonymous
     */
    is_anonymous: boolean;

    /**
     * Poll type, currently can be "regular" or "quiz"
     */
    type: string;

    /**
     * True, if the poll allows multiple answers
     */
    allows_multiple_answers: boolean;

    /**
     * Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
     */
    correct_option_id?: number;
}
