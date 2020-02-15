/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import InlineKeyboardButton from './InlineKeyboardButton';

/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 */
export default interface InlineKeyboardMarkup extends Schema {
    /**
     * Array of button rows, each represented by an Array of InlineKeyboardButton objects
     */
    inline_keyboard: InlineKeyboardButton[][];
}
