import * as JT from '@mojotech/json-type-validation';

/**
 * This object represents a Telegram user or bot.
 */
export default interface User {
    /**
     * Unique identifier for this user or bot
     */
    id: number;

    /**
     * true, if this user is a bot
     */
    is_bot: boolean;

    /**
     * User‘s or bot’s first name
     */
    first_name: string;

    /**
     * Optional. User‘s or bot’s last name
     */
    last_name?: string;

    /**
     * Optional. User‘s or bot’s username
     */
    username?: string;

    /**
     * Optional. IETF language tag of the user's language
     */
    language_code?: string;
}

export const UserDecoder: JT.Decoder<User> = JT.object({
    id: JT.number(),
    is_bot: JT.boolean(),
    first_name: JT.string(),
    last_name: JT.optional(JT.string()),
    username: JT.optional(JT.string()),
    language_code: JT.optional(JT.string()),
});
