import * as JT from '@mojotech/json-type-validation';

import PassportFile, { PassportFileDecoder } from './PassportFile';

type EncryptedPassportElementType =
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'
    | 'phone_number'
    | 'email';

/**
 * Contains information about documents or other Telegram Passport elements shared with the bot by the user.
 * TODO: strengthen types
 */
export default interface EncryptedPassportElement {
    /**
     * Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”,
     * “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”,
     * “phone_number”, “email”.
     */
    type: EncryptedPassportElementType;

    /**
     * Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for
     * “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be
     * decrypted and verified using the accompanying EncryptedCredentials.
     */
    data?: string;

    /**
     * Optional. User's verified phone number, available only for “phone_number” type
     */
    phone_number?: string;

    /**
     * Optional. User's verified email address, available only for “email” type
     */
    email?: string;

    /**
     * Optional. Array of encrypted files with documents provided by the user, available for “utility_bill”,
     * “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be
     * decrypted and verified using the accompanying EncryptedCredentials.
     */
    files?: PassportFile[];

    /**
     * Optional. Encrypted file with the front side of the document, provided by the user. Available for “passport”,
     * “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the
     * accompanying EncryptedCredentials.
     */
    front_side?: PassportFile;

    /**
     * Optional. Encrypted file with the reverse side of the document, provided by the user. Available for
     * “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying
     * EncryptedCredentials.
     */
    reverse_side?: PassportFile;

    /**
     * Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for
     * “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using
     * the accompanying EncryptedCredentials.
     */
    selfie?: PassportFile;

    /**
     * Optional. Array of encrypted files with translated versions of documents provided by the user. Available if
     * requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”,
     * “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified
     * using the accompanying EncryptedCredentials.
     */
    translation?: PassportFile[];

    /**
     * Base64-encoded element hash for using in PassportElementErrorUnspecified
     */
    hash: string;
}

const BasicEncryptedPassportElementDecoder: <
    T extends EncryptedPassportElementType
>(
    arg0: T
) => JT.Decoder<EncryptedPassportElement> = type =>
    JT.object({
        type: JT.constant(type),
        data: JT.optional(JT.string()),
        phone_number: JT.optional(JT.string()),
        email: JT.optional(JT.string()),
        files: JT.optional(JT.array(PassportFileDecoder)),
        front_side: JT.optional(PassportFileDecoder),
        reverse_side: JT.optional(PassportFileDecoder),
        selfie: JT.optional(PassportFileDecoder),
        translation: JT.optional(JT.array(PassportFileDecoder)),
        hash: JT.string(),
    });

export const EncryptedPassportElementDecoder = JT.union(
    BasicEncryptedPassportElementDecoder('address'),
    BasicEncryptedPassportElementDecoder('bank_statement'),
    BasicEncryptedPassportElementDecoder('driver_license'),
    BasicEncryptedPassportElementDecoder('email'),
    BasicEncryptedPassportElementDecoder('identity_card'),
    BasicEncryptedPassportElementDecoder('internal_passport'),
    BasicEncryptedPassportElementDecoder('passport'),
    JT.union(
        BasicEncryptedPassportElementDecoder('passport_registration'),
        BasicEncryptedPassportElementDecoder('personal_details'),
        BasicEncryptedPassportElementDecoder('phone_number'),
        BasicEncryptedPassportElementDecoder('rental_agreement'),
        BasicEncryptedPassportElementDecoder('temporary_registration'),
        BasicEncryptedPassportElementDecoder('utility_bill')
    )
);
