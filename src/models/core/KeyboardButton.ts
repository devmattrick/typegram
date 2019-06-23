/**
 * This object represents one button of the reply keyboard. For simple text buttons string can be used instead of this
 * object to specify text of the button. Optional fields are mutually exclusive.
 */
export default interface KeyboardButton {
    /**
     * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is
     * pressed
     */
    text: string;

    /**
     * Optional. If true, the user&#x27;s phone number will be sent as a contact when the button is pressed. Available in
     * private chats only
     */
    request_contact?: boolean;

    /**
     * Optional. If true, the user&#x27;s current location will be sent when the button is pressed. Available in private
     * chats only
     */
    request_location?: boolean;
}
