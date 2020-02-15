/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import InlineKeyboardMarkup from './../../core/schema/InlineKeyboardMarkup';
import InputContactMessageContent from './InputContactMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputTextMessageContent from './InputTextMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';

/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 */
export default interface InlineQueryResultVenue extends Schema {
    /**
     * Type of the result, must be venue
     */
    type: string;

    /**
     * Unique identifier for this result, 1-64 Bytes
     */
    id: string;

    /**
     * Latitude of the venue location in degrees
     */
    latitude: number;

    /**
     * Longitude of the venue location in degrees
     */
    longitude: number;

    /**
     * Title of the venue
     */
    title: string;

    /**
     * Address of the venue
     */
    address: string;

    /**
     * Optional. Foursquare identifier of the venue if known
     */
    foursquare_id?: string;

    /**
     * Optional. Foursquare type of the venue, if known. (For example, "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
     */
    foursquare_type?: string;

    /**
     * Optional. Inline keyboard attached to the message
     */
    reply_markup?: InlineKeyboardMarkup;

    /**
     * Optional. Content of the message to be sent instead of the venue
     */
    input_message_content?:
        | InputTextMessageContent
        | InputLocationMessageContent
        | InputVenueMessageContent
        | InputContactMessageContent;

    /**
     * Optional. Url of the thumbnail for the result
     */
    thumb_url?: string;

    /**
     * Optional. Thumbnail width
     */
    thumb_width?: number;

    /**
     * Optional. Thumbnail height
     */
    thumb_height?: number;
}
