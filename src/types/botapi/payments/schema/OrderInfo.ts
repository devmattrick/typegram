/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import ShippingAddress from './ShippingAddress';

/**
 * This object represents information about an order.
 */
export default interface OrderInfo extends Schema {
    /**
     * Optional. User name
     */
    name?: string;

    /**
     * Optional. User's phone number
     */
    phone_number?: string;

    /**
     * Optional. User email
     */
    email?: string;

    /**
     * Optional. User shipping address
     */
    shipping_address?: ShippingAddress;
}
