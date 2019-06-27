import * as JT from '@mojotech/json-type-validation';

/**
 * This object represents a point on the map.
 */
export default interface Location {
    /**
     * Longitude as defined by sender
     */
    longitude: number;

    /**
     * Latitude as defined by sender
     */
    latitude: number;
}

export const LocationDecoder: JT.Decoder<Location> = JT.object({
    longitude: JT.number(),
    latitude: JT.number(),
});
