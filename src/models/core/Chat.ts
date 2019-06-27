import * as JT from '@mojotech/json-type-validation';

import ChatPhoto, { ChatPhotoDecoder } from './ChatPhoto';
import Message, { MessageDecoder } from './Message';

export type ChatType = 'private' | 'group' | 'supergroup' | 'channel';

interface Chat<Type extends ChatType> {
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

const BaseChatDecoder: <T extends ChatType>(
    arg0: T
) => JT.Decoder<Chat<T>> = type =>
    JT.object({
        id: JT.number(),
        type: JT.constant(type),
        photo: JT.optional(ChatPhotoDecoder),
    });

interface WithTitle {
    /**
     * Title, for supergroups, channels and group chats
     */
    title: string;
}

const WithTitleDecoder: JT.Decoder<WithTitle> = JT.object({
    title: JT.string(),
});

interface WithUsername {
    /**
     * Username, for private chats, supergroups and channels if available
     */
    username: string;
}

const WithUsernameDecoder: JT.Decoder<WithUsername> = JT.object({
    username: JT.string(),
});

interface WithDescription {
    /**
     * Description, for supergroups and channel chats. Returned only in getChat.
     */
    description: string;
}

const WithDescriptionDecoder: JT.Decoder<WithDescription> = JT.object({
    description: JT.string(),
});

interface WithInvitationLink {
    /**
     * Optional. Chat invite link, for supergroups and channel chats. Each administrator in a chat generates their own
     * invite links, so the bot must first generate the link using exportChatInviteLink. Returned only in getChat.
     */
    invite_link?: string;
}

const WithInvitationLinkDecoder: JT.Decoder<WithInvitationLink> = JT.object({
    invite_link: JT.optional(JT.string()),
});

interface WithPinnedMessage {
    /**
     * Optional. Pinned message, for groups, supergroups and channels. Returned only in getChat.
     */
    pinned_message?: Message;
}

const WithPinnedMessageDecoder: JT.Decoder<WithPinnedMessage> = JT.object({
    pinned_message: JT.lazy(() => JT.optional(MessageDecoder)),
});

interface WithStickerSet {
    /**
     * Optional. true, if the bot can change the group sticker set. Returned only in getChat.
     */
    can_set_sticker_set?: boolean;
}

const WithStickerSetDecoder: JT.Decoder<WithStickerSet> = JT.object({
    can_set_sticker_set: JT.optional(JT.boolean()),
});

interface PrivateChat extends Chat<'private'>, WithUsername {
    /**
     * First name of the other party in a private chat
     */
    first_name: string;

    /**
     * Last name of the other party in a private chat
     */
    last_name?: string;
}

const PrivateChatDecoder: JT.Decoder<PrivateChat> = JT.intersection(
    BaseChatDecoder('private'),
    WithUsernameDecoder,
    JT.object({
        first_name: JT.string(),
        last_name: JT.optional(JT.string()),
    })
);

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

const GroupChatDecoder: JT.Decoder<GroupChat> = JT.intersection(
    BaseChatDecoder('group'),
    WithTitleDecoder,
    WithPinnedMessageDecoder,
    WithStickerSetDecoder,
    JT.object({
        all_members_are_administrators: JT.boolean(),
    })
);

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

const SupergroupChatDecoder: JT.Decoder<SupergroupChat> = JT.intersection(
    BaseChatDecoder('supergroup'),
    WithTitleDecoder,
    WithUsernameDecoder,
    WithDescriptionDecoder,
    WithInvitationLinkDecoder,
    WithPinnedMessageDecoder,
    WithStickerSetDecoder,
    JT.object({
        sticker_set_name: JT.optional(JT.string()),
    })
);

interface ChannelChat
    extends Chat<'channel'>,
        WithTitle,
        WithUsername,
        WithDescription,
        WithInvitationLink,
        WithPinnedMessage {}

const ChannelChatDecoder: JT.Decoder<ChannelChat> = JT.intersection(
    BaseChatDecoder('channel'),
    WithTitleDecoder,
    WithUsernameDecoder,
    WithDescriptionDecoder,
    WithInvitationLinkDecoder,
    WithPinnedMessageDecoder
);

type TelegramChat = PrivateChat | GroupChat | SupergroupChat | ChannelChat;

export default TelegramChat;

export const ChatDecoder = JT.union(
    PrivateChatDecoder,
    GroupChatDecoder,
    SupergroupChatDecoder,
    ChannelChatDecoder
);
