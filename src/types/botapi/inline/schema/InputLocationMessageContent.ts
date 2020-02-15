/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';

/**
 * Represents the content of a location message to be sent as the result of an inline query.
 */
export default interface InputLocationMessageContent extends Schema {
    /**
     * Latitude of the location in degrees
     */
    latitude: number;

    /**
     * Longitude of the location in degrees
     */
    longitude: number;

    /**
     * Optional. Period in seconds for which the location can be updated, should be between 60 and 86400.
     */
    live_period?: number;
}
