import * as JT from '@mojotech/json-type-validation';

/**
 * This object represents a shipping address.
 */
export default interface ShippingAddress {
    /**
     * ISO 3166-1 alpha-2 country code
     */
    country_code: string;

    /**
     * State, if applicable
     */
    state: string;

    /**
     * City
     */
    city: string;

    /**
     * First line for the address
     */
    street_line1: string;

    /**
     * Second line for the address
     */
    street_line2: string;

    /**
     * Address post code
     */
    post_code: string;
}

export const ShippingAddressDecoder: JT.Decoder<ShippingAddress> = JT.object({
    country_code: JT.string(),
    state: JT.string(),
    city: JT.string(),
    street_line1: JT.string(),
    street_line2: JT.string(),
    post_code: JT.string(),
});
