import * as JT from '@mojotech/json-type-validation';

import User, { UserDecoder } from '../core/User';
import ShippingAddress, { ShippingAddressDecoder } from './ShippingAddress';

/**
 * This object contains information about an incoming shipping query.
 */
export default interface ShippingQuery {
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

export const ShippingQueryDecoder: JT.Decoder<ShippingQuery> = JT.object({
    id: JT.string(),
    from: UserDecoder,
    invoice_payload: JT.string(),
    shipping_address: ShippingAddressDecoder,
});
