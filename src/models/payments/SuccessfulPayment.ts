import * as JT from '@mojotech/json-type-validation';
import OrderInfo, { OrderInfoDecoder } from './OrderInfo';

/**
 * This object contains basic information about a successful payment.
 */
export default interface SuccessfulPayment {
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

    /**
     * Telegram payment identifier
     */
    telegram_payment_charge_id: string;

    /**
     * Provider payment identifier
     */
    provider_payment_charge_id: string;
}

export const SuccessfulPaymentDecoder: JT.Decoder<
    SuccessfulPayment
> = JT.object({
    currency: JT.string(),
    total_amount: JT.number(),
    invoice_payload: JT.string(),
    shipping_option_id: JT.optional(JT.string()),
    order_info: JT.optional(OrderInfoDecoder),
    telegram_payment_charge_id: JT.string(),
    provider_payment_charge_id: JT.string(),
});
