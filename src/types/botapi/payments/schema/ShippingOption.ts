/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import LabeledPrice from './LabeledPrice';

/**
 * This object represents one shipping option.
 */
export default interface ShippingOption extends Schema {
    /**
     * Shipping option identifier
     */
    id: string;

    /**
     * Option title
     */
    title: string;

    /**
     * List of price portions
     */
    prices: LabeledPrice[];
}
