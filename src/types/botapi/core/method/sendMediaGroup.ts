/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import InputMediaPhoto from './../schema/InputMediaPhoto';
import InputMediaVideo from './../schema/InputMediaVideo';

/**
 * Use this method to send a group of photos or videos as an album. On success, an array of the sent Messages is returned.
 */
type SendMediaGroup = Method<
    'sendMediaGroup',
    {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format @channelusername)
         */
        chat_id: number | string;
        /**
         * A JSON-serialized array describing photos and videos to be sent, must include 2-10 items
         */
        media: InputMediaPhoto | InputMediaVideo[];
        /**
         * Sends the messages silently. Users will receive a notification with no sound.
         */
        disable_notification?: boolean;
        /**
         * If the messages are a reply, ID of the original message
         */
        reply_to_message_id?: number;
    },
    unknown
>;

export default SendMediaGroup;
