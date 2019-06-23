import InputContactMessageContent from './InputContactMessageContent';
import InputLocationMessageContent from './InputLocationMessageContent';
import InputTextMessageContent from './InputTextMessageContent';
import InputVenueMessageContent from './InputVenueMessageContent';

/**
 * This object represents the content of a message to be sent as a result of an inline query.
 */
type InputMessageContent =
    | InputContactMessageContent
    | InputLocationMessageContent
    | InputTextMessageContent
    | InputVenueMessageContent;

export default InputMessageContent;
