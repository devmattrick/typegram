import * as JT from '@mojotech/json-type-validation';

import Location, { LocationDecoder } from './Location';

/**
 * This object represents a venue.
 */
export default interface Venue {
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
     * Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium”
     * or “food/icecream”.)
     */
    foursquare_type?: string;
}

export const VenueDecoder: JT.Decoder<Venue> = JT.object({
    location: LocationDecoder,
    title: JT.string(),
    address: JT.string(),
    foursquare_id: JT.optional(JT.string()),
    foursquare_type: JT.optional(JT.string()),
});
