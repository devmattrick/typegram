/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import Location from './Location';

/**
 * This object represents a venue.
 */
export default interface Venue extends Schema {
    /**
     * Venue location
     */
    location: Location;

    /**
     * Name of the venue
     */
    title: string;

    /**
     * Address of the venue
     */
    address: string;

    /**
     * Optional. Foursquare identifier of the venue
     */
    foursquare_id?: string;

    /**
     * Optional. Foursquare type of the venue. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
     */
    foursquare_type?: string;
}
