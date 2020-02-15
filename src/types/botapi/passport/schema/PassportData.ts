/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import EncryptedCredentials from './EncryptedCredentials';
import EncryptedPassportElement from './EncryptedPassportElement';

/**
 * Contains information about Telegram Passport data shared with the bot by the user.
 */
export default interface PassportData extends Schema {
    /**
     * Array with information about documents and other Telegram Passport elements that was shared with the bot
     */
    data: EncryptedPassportElement[];

    /**
     * Encrypted credentials required to decrypt the data
     */
    credentials: EncryptedCredentials;
}
