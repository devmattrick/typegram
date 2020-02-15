/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';
import ChatPermissions from './../schema/ChatPermissions';

/**
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members admin rights. Returns True on success.
 */
type SetChatPermissions = Method<
    'setChatPermissions',
    {
        /**
         * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)
         */
        chat_id: number | string;
        /**
         * New default chat permissions
         */
        permissions: ChatPermissions;
    },
    unknown
>;

export default SetChatPermissions;
