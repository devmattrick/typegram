/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';

/**
 * This object represents a point on the map.
 */
export default interface Location extends Schema {
    /**
     * Longitude as defined by sender
     */
    longitude: number;

    /**
     * Latitude as defined by sender
     */
    latitude: number;
}
