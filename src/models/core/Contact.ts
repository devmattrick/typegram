import * as JT from '@mojotech/json-type-validation';

/**
 * This object represents a phone contact.
 */
export default interface Contact {
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
     * Optional. Contact's user identifier in Telegram
     */
    user_id?: number;

    /**
     * Optional. Additional data about the contact in the form of a vCard
     */
    vcard?: string;
}

export const ContactDecoder: JT.Decoder<Contact> = JT.object({
    phone_number: JT.string(),
    first_name: JT.string(),
    last_name: JT.optional(JT.string()),
    user_id: JT.optional(JT.number()),
    vcard: JT.optional(JT.string()),
});
