import * as JT from '@mojotech/json-type-validation';

import User, { UserDecoder } from '../core/User';
import OrderInfo, { OrderInfoDecoder } from './OrderInfo';

/**
 * This object contains information about an incoming pre-checkout query.
 */
export default interface PreCheckoutQuery {
    /**
     * Unique query identifier
     */
    id: string;

    /**
     * User who sent the query
     */
    from: User;

    /**
     * Three-letter ISO 4217 currency code
     */
    currency: string;

    /**
     * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45
     * pass amount &#x3D; 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal
     * point for each currency (2 for the majority of currencies).
     */
    total_amount: number;

    /**
     * Bot specified invoice payload
     */
    invoice_payload: string;

    /**
     * Optional. Identifier of the shipping option chosen by the user
     */
    shipping_option_id?: string;

    /**
     * Optional. Order info provided by the user
     */
    order_info?: OrderInfo;
}

export const PreCheckoutQueryDecoder: JT.Decoder<PreCheckoutQuery> = JT.object({
    id: JT.string(),
    from: UserDecoder,
    currency: JT.string(),
    total_amount: JT.number(),
    invoice_payload: JT.string(),
    shipping_option_id: JT.optional(JT.string()),
    order_info: JT.optional(OrderInfoDecoder),
});
