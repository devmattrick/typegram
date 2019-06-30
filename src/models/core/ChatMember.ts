import * as JT from '@mojotech/json-type-validation';

import User, { UserDecoder } from './User';

type ChatUserStatus =
    | 'creator'
    | 'administrator'
    | 'member'
    | 'restricted'
    | 'left'
    | 'kicked';

/**
 * This object contains information about one member of a chat.
 */
interface ChatUser<Status extends ChatUserStatus> {
    /**
     * Information about the user
     */
    user: User;

    /**
     * The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”
     */
    status: Status;

    /**
     * true, if the bot is allowed to edit administrator privileges of that user
     */
    can_be_edited?: true;
}

const ChatUserDecoder: <T extends ChatUserStatus>(
    status: T
) => JT.Decoder<ChatUser<T>> = status =>
    JT.object({
        user: UserDecoder,
        status: JT.constant(status),
        can_be_edited: JT.optional(JT.constant(true)),
    });

interface WithUntilDate {
    /**
     * Restricted and kicked only. Date when restrictions will be lifted for this user, unix time
     */
    until_date: number;
}

const WithUntilDateDecoder: JT.Decoder<WithUntilDate> = JT.object({
    until_date: JT.number(),
});

interface WithAdmin {
    /**
     * true, if the administrator can change the chat title, photo and other settings
     */
    can_change_info: boolean;

    /**
     * true, if the administrator can post in the channel, channels only
     */
    can_post_messages: boolean;

    /**
     * true, if the administrator can edit messages of other users and can pin messages,
     * channels only
     */
    can_edit_messages: boolean;

    /**
     * true, if the administrator can delete messages of other users
     */
    can_delete_messages: boolean;

    /**
     * true, if the administrator can invite new users to the chat
     */
    can_invite_users: boolean;

    /**
     * true, if the administrator can restrict, ban or unban chat members
     */
    can_restrict_members: boolean;

    /**
     * true, if the administrator can pin messages, groups and supergroups only
     */
    can_pin_messages: boolean;

    /**
     * true, if the administrator can add new administrators with a subset of their own
     * privileges or demote administrators that they has promoted, directly or indirectly
     * (promoted by administrators that were appointed by the user)
     */
    can_promote_members: boolean;
}

const WithAdminDecoder: JT.Decoder<WithAdmin> = JT.object({
    can_change_info: JT.boolean(),
    can_post_messages: JT.boolean(),
    can_edit_messages: JT.boolean(),
    can_delete_messages: JT.boolean(),
    can_invite_users: JT.boolean(),
    can_restrict_members: JT.boolean(),
    can_pin_messages: JT.boolean(),
    can_promote_members: JT.boolean(),
});

interface WithRestricted {
    /**
     * true, if the user is a member of the chat at the moment of the request
     */
    is_member: boolean;

    /**
     * true, if the user can send text messages, contacts, locations and venues
     */
    can_send_messages: boolean;

    /**
     * true, if the user can send audios, documents, photos, videos, video notes and
     * voice notes, implies can_send_messages
     */
    can_send_media_messages: boolean;

    /**
     * true, if the user can send animations, games, stickers and use inline bots, implies
     * can_send_media_messages
     */
    can_send_other_messages: boolean;

    /**
     * true, if user may add web page previews to his messages, implies can_send_media_messages
     */
    can_add_web_page_previews: boolean;
}

const WithRestrictedDecoder: JT.Decoder<WithRestricted> = JT.object({
    is_member: JT.boolean(),
    can_send_messages: JT.boolean(),
    can_send_media_messages: JT.boolean(),
    can_send_other_messages: JT.boolean(),
    can_add_web_page_previews: JT.boolean(),
});

interface ChatCreator extends ChatUser<'creator'>, WithAdmin {}
const ChatCreatorDecoder: JT.Decoder<ChatCreator> = JT.intersection(
    ChatUserDecoder('creator'),
    WithAdminDecoder
);

interface ChatAdministrator extends ChatUser<'administrator'>, WithAdmin {}
const ChatAdministratorDecoder: JT.Decoder<ChatAdministrator> = JT.intersection(
    ChatUserDecoder('administrator'),
    WithAdminDecoder
);

type ChatMember = ChatUser<'member'>;
const BaseChatMemberDecoder: JT.Decoder<ChatMember> = ChatUserDecoder('member');

interface ChatRestricted
    extends ChatUser<'restricted'>,
        WithRestricted,
        WithUntilDate {}
const ChatRestrictedDecoder: JT.Decoder<ChatRestricted> = JT.intersection(
    ChatUserDecoder('restricted'),
    WithRestrictedDecoder,
    WithUntilDateDecoder
);

type ChatLeft = ChatUser<'left'>;
const ChatLeftDecoder: JT.Decoder<ChatLeft> = ChatUserDecoder('left');

interface ChatKicked extends ChatUser<'kicked'>, WithUntilDate {}
const ChatKickedDecoder: JT.Decoder<ChatKicked> = JT.intersection(
    ChatUserDecoder('kicked'),
    WithUntilDateDecoder
);

type TelegramChatMember =
    | ChatCreator
    | ChatAdministrator
    | ChatMember
    | ChatRestricted
    | ChatLeft
    | ChatKicked;

export default TelegramChatMember;

export const ChatMemberDecoder: JT.Decoder<TelegramChatMember> = JT.union(
    ChatCreatorDecoder,
    ChatAdministratorDecoder,
    BaseChatMemberDecoder,
    ChatRestrictedDecoder,
    ChatLeftDecoder,
    ChatKickedDecoder
);
