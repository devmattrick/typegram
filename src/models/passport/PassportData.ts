import * as JT from '@mojotech/json-type-validation';

import EncryptedCredentials, {
    EncryptedCredentialsDecoder,
} from './EncryptedCredentials';
import EncryptedPassportElement, {
    EncryptedPassportElementDecoder,
} from './EncryptedPassportElement';

/**
 * Contains information about Telegram Passport data shared with the bot by the user.
 */
export default interface PassportData {
    /**
     * Array with information about documents and other Telegram Passport elements that was shared with the bot
     */
    data: EncryptedPassportElement[];

    /**
     * Encrypted credentials required to decrypt the data
     */
    credentials: EncryptedCredentials;
}

export const PassportDataDecoder: JT.Decoder<PassportData> = JT.object({
    data: JT.array(EncryptedPassportElementDecoder),
    credentials: EncryptedCredentialsDecoder,
});
