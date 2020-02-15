/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 */
type SetChatAdministratorCustomTitle = Method<
    'setChatAdministratorCustomTitle',
    {
        /**
         * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
         */
        chat_id: number | string;
        /**
         * Unique identifier of the target user
         */
        user_id: number;
        /**
         * New custom title for the administrator; 0-16 characters, emoji are not allowed
         */
        custom_title: string;
    },
    unknown
>;

export default SetChatAdministratorCustomTitle;
