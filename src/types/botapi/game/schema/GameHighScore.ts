/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import User from './../../core/schema/User';

/**
 * This object represents one row of the high scores table for a game.
 */
export default interface GameHighScore extends Schema {
    /**
     * Position in high score table for the game
     */
    position: number;

    /**
     * User
     */
    user: User;

    /**
     * Score
     */
    score: number;
}
