/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import ShippingAddress from './ShippingAddress';
import User from './../../core/schema/User';

/**
 * This object contains information about an incoming shipping query.
 */
export default interface ShippingQuery extends Schema {
    /**
     * Unique query identifier
     */
    id: string;

    /**
     * User who sent the query
     */
    from: User;

    /**
     * Bot specified invoice payload
     */
    invoice_payload: string;

    /**
     * User specified shipping address
     */
    shipping_address: ShippingAddress;
}
