import ChatPhoto from './ChatPhoto';
import Message from './Message';

interface Chat<Type extends 'private' | 'group' | 'supergroup' | 'channel'> {
    /**
     * Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have
     * difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or
     * double-precision float type are safe for storing this identifier.
     */
    id: number;

    /**
     * Type of chat can be either “private”, “group”, “supergroup” or “channel”
     */
    type: Type;

    /**
     * Optional. Chat photo. Returned only in getChat.
     */
    photo?: ChatPhoto;
}

interface WithTitle {
    /**
     * Title, for supergroups, channels and group chats
     */
    title: string;
}

interface WithUsername {
    /**
     * Username, for private chats, supergroups and channels if available
     */
    username: string;
}

interface WithDescription {
    /**
     * Description, for supergroups and channel chats. Returned only in getChat.
     */
    description: string;
}

interface WithInvitationLink {
    /**
     * Optional. Chat invite link, for supergroups and channel chats. Each administrator in a chat generates their own
     * invite links, so the bot must first generate the link using exportChatInviteLink. Returned only in getChat.
     */
    invite_link?: string;
}

interface WithPinnedMessage {
    /**
     * Optional. Pinned message, for groups, supergroups and channels. Returned only in getChat.
     */
    pinned_message?: Message;
}

interface WithStickerSet {
    /**
     * Optional. true, if the bot can change the group sticker set. Returned only in getChat.
     */
    can_set_sticker_set?: boolean;
}

interface PrivateChat extends Chat<'private'>, WithUsername {
    /**
     * First name of the other party in a private chat
     */
    first_name: string;

    /**
     * Last name of the other party in a private chat
     */
    last_name: string;
}

interface GroupChat
    extends Chat<'group'>,
        WithTitle,
        WithPinnedMessage,
        WithStickerSet {
    /**
     * true if a group has ‘All Members Are Admins’ enabled.
     */
    all_members_are_administrators: boolean;
}

interface SupergroupChat
    extends Chat<'supergroup'>,
        WithTitle,
        WithUsername,
        WithDescription,
        WithInvitationLink,
        WithPinnedMessage,
        WithStickerSet {
    /**
     * Optional. For supergroups, name of group sticker set. Returned only in getChat.
     */
    sticker_set_name?: string;
}

interface ChannelChat
    extends Chat<'channel'>,
        WithTitle,
        WithUsername,
        WithDescription,
        WithInvitationLink,
        WithPinnedMessage {}

type TelegramChat = PrivateChat | GroupChat | SupergroupChat | ChannelChat;

export default TelegramChat;
