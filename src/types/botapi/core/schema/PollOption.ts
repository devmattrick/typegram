/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';

/**
 * This object contains information about one answer option in a poll.
 */
export default interface PollOption extends Schema {
    /**
     * Option text, 1-100 characters
     */
    text: string;

    /**
     * Number of users that voted for this option
     */
    voter_count: number;
}
