/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import User from './User';

/**
 * This object contains information about one member of a chat.
 */
export default interface ChatMember extends Schema {
    /**
     * Information about the user
     */
    user: User;

    /**
     * The member's status in the chat. Can be "creator", "administrator", "member", "restricted", "left" or "kicked"
     */
    status: string;

    /**
     * Optional. Owner and administrators only. Custom title for this user
     */
    custom_title?: string;

    /**
     * Optional. Restricted and kicked only. Date when restrictions will be lifted for this user; unix time
     */
    until_date?: number;

    /**
     * Optional. Administrators only. True, if the bot is allowed to edit administrator privileges of that user
     */
    can_be_edited?: boolean;

    /**
     * Optional. Administrators only. True, if the administrator can post in the channel; channels only
     */
    can_post_messages?: boolean;

    /**
     * Optional. Administrators only. True, if the administrator can edit messages of other users and can pin messages; channels only
     */
    can_edit_messages?: boolean;

    /**
     * Optional. Administrators only. True, if the administrator can delete messages of other users
     */
    can_delete_messages?: boolean;

    /**
     * Optional. Administrators only. True, if the administrator can restrict, ban or unban chat members
     */
    can_restrict_members?: boolean;

    /**
     * Optional. Administrators only. True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user)
     */
    can_promote_members?: boolean;

    /**
     * Optional. Administrators and restricted only. True, if the user is allowed to change the chat title, photo and other settings
     */
    can_change_info?: boolean;

    /**
     * Optional. Administrators and restricted only. True, if the user is allowed to invite new users to the chat
     */
    can_invite_users?: boolean;

    /**
     * Optional. Administrators and restricted only. True, if the user is allowed to pin messages; groups and supergroups only
     */
    can_pin_messages?: boolean;

    /**
     * Optional. Restricted only. True, if the user is a member of the chat at the moment of the request
     */
    is_member?: boolean;

    /**
     * Optional. Restricted only. True, if the user is allowed to send text messages, contacts, locations and venues
     */
    can_send_messages?: boolean;

    /**
     * Optional. Restricted only. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes
     */
    can_send_media_messages?: boolean;

    /**
     * Optional. Restricted only. True, if the user is allowed to send polls
     */
    can_send_polls?: boolean;

    /**
     * Optional. Restricted only. True, if the user is allowed to send animations, games, stickers and use inline bots
     */
    can_send_other_messages?: boolean;

    /**
     * Optional. Restricted only. True, if the user is allowed to add web page previews to their messages
     */
    can_add_web_page_previews?: boolean;
}
