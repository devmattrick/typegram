/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import PassportElementErrorDataField from './../schema/PassportElementErrorDataField';
import PassportElementErrorFile from './../schema/PassportElementErrorFile';
import PassportElementErrorFiles from './../schema/PassportElementErrorFiles';
import PassportElementErrorFrontSide from './../schema/PassportElementErrorFrontSide';
import PassportElementErrorReverseSide from './../schema/PassportElementErrorReverseSide';
import PassportElementErrorSelfie from './../schema/PassportElementErrorSelfie';
import PassportElementErrorTranslationFile from './../schema/PassportElementErrorTranslationFile';
import PassportElementErrorTranslationFiles from './../schema/PassportElementErrorTranslationFiles';
import PassportElementErrorUnspecified from './../schema/PassportElementErrorUnspecified';

/**
 * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
 * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
 */
type SetPassportDataErrors = Method<
    'setPassportDataErrors',
    {
        /**
         * User identifier
         */
        user_id: number;
        /**
         * A JSON-serialized array describing the errors
         */
        errors:
            | PassportElementErrorDataField
            | PassportElementErrorFrontSide
            | PassportElementErrorReverseSide
            | PassportElementErrorSelfie
            | PassportElementErrorFile
            | PassportElementErrorFiles
            | PassportElementErrorTranslationFile
            | PassportElementErrorTranslationFiles
            | PassportElementErrorUnspecified[];
    },
    unknown
>;

export default SetPassportDataErrors;
