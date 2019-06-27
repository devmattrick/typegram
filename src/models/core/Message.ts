import * as JT from '@mojotech/json-type-validation';

import Game, { GameDecoder } from '../game/Game';
import PassportData, { PassportDataDecoder } from '../passport/PassportData';
import Invoice, { InvoiceDecoder } from '../payments/Invoice';
import SuccessfulPayment, {
    SuccessfulPaymentDecoder,
} from '../payments/SuccessfulPayment';
import Sticker, { StickerDecoder } from '../stickers/Sticker';
import Animation, { AnimationDecoder } from './Animation';
import Audio, { AudioDecoder } from './Audio';
import Chat, { ChatDecoder } from './Chat';
import Contact, { ContactDecoder } from './Contact';
import Document, { DocumentDecoder } from './Document';
import Location, { LocationDecoder } from './Location';
import MessageEntity, { MessageEntityDecoder } from './MessageEntity';
import PhotoSize, { PhotoSizeDecoder } from './PhotoSize';
import Poll, { PollDecoder } from './Poll';
import User, { UserDecoder } from './User';
import Venue, { VenueDecoder } from './Venue';
import Video, { VideoDecoder } from './Video';
import VideoNote, { VideoNoteDecoder } from './VideoNote';
import Voice, { VoiceDecoder } from './Voice';

/**
 * This object represents a message.
 */
interface Message {
    /**
     * Unique message identifier inside this chat
     */
    message_id: number;

    /**
     * Optional. Sender, empty for messages sent to channels
     */
    from?: User;

    /**
     * Date the message was sent in Unix time
     */
    date: number;

    /**
     * Conversation the message belongs to
     */
    chat: Chat;

    /**
     * Optional. For replies, the original message. Note that the Message object in this field will not contain further
     * reply_to_message fields even if it itself is a reply.
     */
    reply_to_message?: Message;

    /**
     * Optional. Date the message was last edited in Unix time
     */
    edit_date?: number;

    /**
     * Optional. The unique identifier of a media message group this message belongs to
     */
    media_group_id?: string;

    /**
     * Optional. Signature of the post author for messages in channels
     */
    author_signature?: string;
}

const BaseMessageDecoder: JT.Decoder<Message> = JT.object({
    message_id: JT.number(),
    from: JT.optional(UserDecoder),
    date: JT.number(),
    chat: ChatDecoder,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    reply_to_message: JT.lazy(() => JT.optional(MessageDecoder)),
    edit_date: JT.optional(JT.number()),
    media_group_id: JT.optional(JT.string()),
    author_signature: JT.optional(JT.string()),
});

interface ForwardDate {
    /**
     * For forwarded messages, date the original message was sent in Unix time
     */
    forward_date: number;
}

const ForwardDateDecoder: JT.Decoder<ForwardDate> = JT.object({
    forward_date: JT.number(),
});

interface ForwardFromUser {
    /**
     * Optional. For forwarded messages, sender of the original message
     */
    forward_from: User;
}

const ForwardFromUserDecoder: JT.Decoder<ForwardFromUser> = JT.object({
    forward_from: UserDecoder,
});

interface ForwardFromChannel {
    /**
     * For messages forwarded from channels, information about the original channel
     */
    forward_from_chat: Chat;

    /**
     * For messages forwarded from channels, identifier of the original message in the channel
     */
    forward_from_message_id: number;

    /**
     * For messages forwarded from channels, signature of the post author if present
     */
    forward_signature: string;
}

const ForwardFromChannelDecoder: JT.Decoder<ForwardFromChannel> = JT.object({
    forward_from_chat: ChatDecoder,
    forward_from_message_id: JT.number(),
    forward_signature: JT.string(),
});

interface ForwardFromAnonymous {
    /**
     * Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
     */
    forward_sender_name: string;
}

const ForwardFromAnonymousDecoder: JT.Decoder<ForwardFromAnonymous> = JT.object(
    {
        forward_sender_name: JT.string(),
    }
);

type ForwardFrom = ForwardFromUser | ForwardFromAnonymous | ForwardFromChannel;

const ForwardFromDecoder: JT.Decoder<ForwardFrom> = JT.union(
    ForwardFromUserDecoder,
    ForwardFromChannelDecoder,
    ForwardFromAnonymousDecoder
);

interface Captionable {
    /**
     * Caption for the animation, audio, document, photo, video or voice, 0-1024 characters
     */
    caption: string;

    /**
     * For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
     */
    caption_entities: MessageEntity[];
}

const CaptionableDecoder: JT.Decoder<Captionable> = JT.object({
    caption: JT.string(),
    caption_entities: JT.array(MessageEntityDecoder),
});

interface TextMessage extends Message {
    /**
     * For text messages, the actual UTF-8 text of the message, 0-4096 characters.
     */
    text: string;

    /**
     * For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
     */
    entities: MessageEntity[];
}

const TextMessageDecoder: JT.Decoder<TextMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        text: JT.string(),
        entities: JT.array(MessageEntityDecoder),
    })
);

interface AudioMessage extends Message, Captionable {
    /**
     * Message is an audio file, information about the file
     */
    audio: Audio;
}

const AudioMessageDecoder: JT.Decoder<AudioMessage> = JT.intersection(
    BaseMessageDecoder,
    CaptionableDecoder,
    JT.object({
        audio: AudioDecoder,
    })
);

interface DocumentMessage extends Message, Captionable {
    /**
     * Message is a general file, information about the file
     */
    document: Document;
}

const DocumentMessageDecoder: JT.Decoder<DocumentMessage> = JT.intersection(
    BaseMessageDecoder,
    CaptionableDecoder,
    JT.object({
        document: DocumentDecoder,
    })
);

interface AnimationMessage extends Message {
    /**
     * Message is an animation, information about the animation. For backward compatibility, when this field is
     * set, the document field will also be set
     */
    animation: Animation;
}

const AnimationMessageDecoder: JT.Decoder<AnimationMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        animation: AnimationDecoder,
    })
);

interface GameMessage extends Message {
    /**
     * Message is a game, information about the game. More about games »
     */
    game: Game;
}

const GameMessageDecoder: JT.Decoder<GameMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        game: GameDecoder,
    })
);

interface PhotoMessage extends Message, Captionable {
    /**
     * Message is a photo, available sizes of the photo
     */
    photo: PhotoSize[];
}

const PhotoMessageDecoder: JT.Decoder<PhotoMessage> = JT.intersection(
    BaseMessageDecoder,
    CaptionableDecoder,
    JT.object({
        photo: JT.array(PhotoSizeDecoder),
    })
);

interface StickerMessage extends Message {
    /**
     * Message is a sticker, information about the sticker
     */
    sticker: Sticker;
}

const StickerMessageDecoder: JT.Decoder<StickerMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        sticker: StickerDecoder,
    })
);

interface VideoMessage extends Message, Captionable {
    /**
     * Message is a video, information about the video
     */
    video: Video;
}

const VideoMessageDecoder: JT.Decoder<VideoMessage> = JT.intersection(
    BaseMessageDecoder,
    CaptionableDecoder,
    JT.object({
        video: VideoDecoder,
    })
);

interface VoiceMessage extends Message {
    /**
     * Message is a voice message, information about the file
     */
    voice: Voice;
}

const VoiceMessageDecoder: JT.Decoder<VoiceMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        voice: VoiceDecoder,
    })
);

interface VideoNoteMessage extends Message {
    /**
     * Message is a video note, information about the video message
     */
    video_note: VideoNote;
}

const VideoNoteMessageDecoder: JT.Decoder<VideoNoteMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        video_note: VideoNoteDecoder,
    })
);

interface ContactMessage extends Message {
    /**
     * Message is a shared contact, information about the contact
     */
    contact: Contact;
}

const ContactMessageDecoder: JT.Decoder<ContactMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        contact: ContactDecoder,
    })
);

interface LocationMessage extends Message {
    /**
     * Message is a shared location, information about the location
     */
    location: Location;
}

const LocationMessageDecoder: JT.Decoder<LocationMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        location: LocationDecoder,
    })
);

interface VenueMessage extends Message {
    /**
     * Message is a venue, information about the venue
     */
    venue: Venue;
}

const VenueMessageDecoder: JT.Decoder<VenueMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        venue: VenueDecoder,
    })
);

interface PollMessage extends Message {
    /**
     * Message is a native poll, information about the poll
     */
    poll: Poll;
}

const PollMessageDecoder: JT.Decoder<PollMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        poll: PollDecoder,
    })
);

interface NewChatMembers extends Message {
    /**
     * New members that were added to the group or supergroup and information about them (the bot itself may be
     * one of these members)
     */
    new_chat_members: User[];
}

const NewChatMembersDecoder: JT.Decoder<NewChatMembers> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        new_chat_members: JT.array(UserDecoder),
    })
);

interface LeftChatMember extends Message {
    /**
     * A member was removed from the group, information about them (this member may be the bot itself)
     */
    left_chat_member: User;
}

const LeftChatMemberDecoder: JT.Decoder<LeftChatMember> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        left_chat_member: UserDecoder,
    })
);

interface NewChatTitle extends Message {
    /**
     * A chat title was changed to this value
     */
    new_chat_title: string;
}

const NewChatTitleDecoder: JT.Decoder<NewChatTitle> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        new_chat_title: JT.string(),
    })
);

interface NewChatPhoto extends Message {
    /**
     * A chat photo was change to this value
     */
    new_chat_photo: PhotoSize[];
}

const NewChatPhotoDecoder: JT.Decoder<NewChatPhoto> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        new_chat_photo: JT.array(PhotoSizeDecoder),
    })
);

interface DeleteChatPhoto extends Message {
    /**
     * Service message: the chat photo was deleted
     */
    delete_chat_photo: true;
}

const DeleteChatPhotoDecoder: JT.Decoder<DeleteChatPhoto> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        delete_chat_photo: JT.constant(true),
    })
);

interface GroupChatCreated extends Message {
    /**
     * Service message: the group has been created
     */
    group_chat_created: true;
}

const GroupChatCreatedDecoder: JT.Decoder<GroupChatCreated> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        group_chat_created: JT.constant(true),
    })
);

interface SupergroupChatCreated extends Message {
    /**
     * Service message: the supergroup has been created. This field can‘t be received in a message coming
     * through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to
     * message if someone replies to a very first message in a directly created supergroup.
     */
    supergroup_chat_created: true;
}

const SupergroupChatCreatedDecoder: JT.Decoder<
    SupergroupChatCreated
> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        supergroup_chat_created: JT.constant(true),
    })
);

interface ChannelChatCreated extends Message {
    /**
     * Service message: the channel has been created. This field can‘t be received in a message coming through
     * updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if
     * someone replies to a very first message in a channel.
     */
    channel_chat_created: true;
}

const ChannelChatCreatedDecoder: JT.Decoder<
    ChannelChatCreated
> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        channel_chat_created: JT.constant(true),
    })
);

interface MigrateToChatId extends Message {
    /**
     * The group has been migrated to a supergroup with the specified identifier. This number may be greater
     * than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is
     * smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this
     * identifier.
     */
    migrate_to_chat_id: number;
}

const MigrateToChatIdDecoder: JT.Decoder<MigrateToChatId> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        migrate_to_chat_id: JT.number(),
    })
);

interface MigrateFromChatId extends Message {
    /**
     * The supergroup has been migrated from a group with the specified identifier. This number may be greater
     * than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is
     * smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this
     * identifier.
     */
    migrate_from_chat_id: number;
}

const MigrateFromChatIdDecoder: JT.Decoder<MigrateFromChatId> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        migrate_from_chat_id: JT.number(),
    })
);

interface PinnedMessage extends Message {
    /**
     * Specified message was pinned. Note that the Message object in this field will not contain further reply
     * to_message fields even if it is itself a reply.
     */
    pinned_message: Message;
}

const PinnedMessageDecoder: JT.Decoder<PinnedMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        pinned_message: JT.lazy(() => MessageDecoder),
    })
);

interface InvoiceMessage extends Message {
    /**
     * Message is an invoice for a payment, information about the invoice.
     */
    invoice: Invoice;
}

const InvoiceMessageDecoder: JT.Decoder<InvoiceMessage> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        invoice: InvoiceDecoder,
    })
);

interface SuccessfulPaymentMessage extends Message {
    /**
     * Message is a service message about a successful payment, information about the payment.
     */
    successful_payment: SuccessfulPayment;
}

const SuccessfulPaymentMessageDecoder: JT.Decoder<
    SuccessfulPaymentMessage
> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        successful_payment: SuccessfulPaymentDecoder,
    })
);

interface ConnectedWebsiteMessage extends Message {
    /**
     * The domain name of the website on which the user has logged in.
     */
    connected_website: string;
}

const ConnectedWebsiteMessageDecoder: JT.Decoder<
    ConnectedWebsiteMessage
> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        connected_website: JT.string(),
    })
);

interface PassportDataMessage extends Message {
    /**
     * Telegram Passport data
     */
    passport_data: PassportData;
}

const PassportDataMessageDecoder: JT.Decoder<
    PassportDataMessage
> = JT.intersection(
    BaseMessageDecoder,
    JT.object({
        passport_data: PassportDataDecoder,
    })
);

type ForwardedMessage = (ForwardDate & ForwardFrom) | {};

const ForwardedMessageDecoder: JT.Decoder<ForwardedMessage> = JT.union(
    JT.intersection(ForwardDateDecoder, ForwardFromDecoder),
    JT.object({})
);

type ContentfulMessage =
    | AnimationMessage
    | AudioMessage
    | DocumentMessage
    | GameMessage
    | TextMessage
    | PhotoMessage
    | StickerMessage
    | VideoMessage
    | VoiceMessage
    | VideoNoteMessage
    | ContactMessage
    | LocationMessage
    | VenueMessage
    | PollMessage;

const ContentfulMessageDecoder: JT.Decoder<ContentfulMessage> = JT.union(
    AnimationMessageDecoder,
    AudioMessageDecoder,
    DocumentMessageDecoder,
    GameMessageDecoder,
    TextMessageDecoder,
    PhotoMessageDecoder,
    StickerMessageDecoder,
    JT.union(
        VideoMessageDecoder,
        VoiceMessageDecoder,
        VideoNoteMessageDecoder,
        ContactMessageDecoder,
        LocationMessageDecoder,
        VenueMessageDecoder,
        PollMessageDecoder
    )
);

type ServiceMessage =
    | NewChatMembers
    | LeftChatMember
    | NewChatTitle
    | NewChatPhoto
    | DeleteChatPhoto
    | GroupChatCreated
    | SupergroupChatCreated
    | ChannelChatCreated
    | MigrateToChatId
    | MigrateFromChatId
    | PinnedMessage
    | InvoiceMessage
    | SuccessfulPaymentMessage
    | ConnectedWebsiteMessage
    | PassportDataMessage;

const ServiceMessageDecoder: JT.Decoder<ServiceMessage> = JT.union(
    NewChatMembersDecoder,
    LeftChatMemberDecoder,
    NewChatTitleDecoder,
    NewChatPhotoDecoder,
    DeleteChatPhotoDecoder,
    GroupChatCreatedDecoder,
    SupergroupChatCreatedDecoder,
    JT.union(
        ChannelChatCreatedDecoder,
        MigrateToChatIdDecoder,
        MigrateFromChatIdDecoder,
        PinnedMessageDecoder,
        InvoiceMessageDecoder,
        SuccessfulPaymentMessageDecoder,
        ConnectedWebsiteMessageDecoder,
        PassportDataMessageDecoder
    )
);

type TelegramMessage = ContentfulMessage & ForwardedMessage | ServiceMessage;

export default TelegramMessage;

export const MessageDecoder = JT.union(
    JT.intersection(ContentfulMessageDecoder, ForwardedMessageDecoder),
    ServiceMessageDecoder
);
