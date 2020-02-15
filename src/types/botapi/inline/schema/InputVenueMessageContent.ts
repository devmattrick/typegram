/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';

/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 */
export default interface InputVenueMessageContent extends Schema {
    /**
     * Latitude of the venue in degrees
     */
    latitude: number;

    /**
     * Longitude of the venue in degrees
     */
    longitude: number;

    /**
     * Name of the venue
     */
    title: string;

    /**
     * Address of the venue
     */
    address: string;

    /**
     * Optional. Foursquare identifier of the venue, if known
     */
    foursquare_id?: string;

    /**
     * Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
     */
    foursquare_type?: string;
}
