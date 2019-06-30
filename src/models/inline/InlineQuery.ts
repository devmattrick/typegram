import * as JT from '@mojotech/json-type-validation';

import Location, { LocationDecoder } from '../core/Location';
import User, { UserDecoder } from '../core/User';

/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some
 * default or trending results.
 */
export default interface InlineQuery {
    /**
     * Unique identifier for this query
     */
    id: string;

    /**
     * Sender
     */
    from: User;

    /**
     * Optional. Sender location, only for bots that request user location
     */
    location?: Location;

    /**
     * Text of the query (up to 512 characters)
     */
    query: string;

    /**
     * Offset of the results to be returned, can be controlled by the bot
     */
    offset: string;
}

export const InlineQueryDecoder = JT.object({
    id: JT.string(),
    from: UserDecoder,
    location: JT.optional(LocationDecoder),
    query: JT.string(),
    offset: JT.string(),
});
