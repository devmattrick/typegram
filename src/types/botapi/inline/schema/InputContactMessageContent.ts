/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';

/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 */
export default interface InputContactMessageContent extends Schema {
    /**
     * Contact's phone number
     */
    phone_number: string;

    /**
     * Contact's first name
     */
    first_name: string;

    /**
     * Optional. Contact's last name
     */
    last_name?: string;

    /**
     * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
     */
    vcard?: string;
}
