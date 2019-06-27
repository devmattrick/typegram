import * as JT from '@mojotech/json-type-validation';

import ShippingAddress, { ShippingAddressDecoder } from './ShippingAddress';

/**
 * This object represents information about an order.
 */
export default interface OrderInfo {
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

export const OrderInfoDecoder: JT.Decoder<OrderInfo> = JT.object({
    name: JT.optional(JT.string()),
    phone_number: JT.optional(JT.string()),
    email: JT.optional(JT.string()),
    shipping_address: JT.optional(ShippingAddressDecoder),
});
