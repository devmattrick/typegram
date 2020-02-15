/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import ChatPermissions from './../schema/ChatPermissions';

/**
 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
 */
type RestrictChatMember = Method<
    'restrictChatMember',
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
         * New user permissions
         */
        permissions: ChatPermissions;
        /**
         * Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
         */
        until_date?: number;
    },
    unknown
>;

export default RestrictChatMember;
