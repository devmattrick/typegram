import Game from '../game/Game';
import PassportData from '../passport/PassportData';
import Invoice from '../payments/Invoice';
import SuccessfulPayment from '../payments/SuccessfulPayment';
import Sticker from '../stickers/Sticker';
import Animation from './Animation';
import Audio from './Audio';
import Chat from './Chat';
import Contact from './Contact';
import Document from './Document';
import Location from './Location';
import MessageEntity from './MessageEntity';
import PhotoSize from './PhotoSize';
import Poll from './Poll';
import User from './User';
import Venue from './Venue';
import Video from './Video';
import VideoNote from './VideoNote';
import Voice from './Voice';

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

interface ForwardDate {
    /**
     * For forwarded messages, date the original message was sent in Unix time
     */
    forward_date: number;
}

interface ForwardFromUser {
    /**
     * Optional. For forwarded messages, sender of the original message
     */
    forward_from: User;
}

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

interface ForwardFromAnonymous {
    /**
     * Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
     */
    forward_sender_name: string;
}

type ForwardFrom = ForwardFromUser | ForwardFromAnonymous | ForwardFromChannel;

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

interface TextMessage extends Message {
    /**
     * For text messages, the actual UTF-8 text of the message, 0-4096 characters.
     */
    text: string;

    /**
     * For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
     */
    entities?: MessageEntity[];
}

interface AudioMessage extends Message, Captionable {
    /**
     * Message is an audio file, information about the file
     */
    audio: Audio;
}

interface DocumentMessage extends Message, Captionable {
    /**
     * Message is a general file, information about the file
     */
    document: Document;
}

interface AnimationMessage extends Message {
    /**
     * Message is an animation, information about the animation. For backward compatibility, when this field is
     * set, the document field will also be set
     */
    animation: Animation;
}

interface GameMessage extends Message {
    /**
     * Message is a game, information about the game. More about games »
     */
    game: Game;
}

interface PhotoMessage extends Message, Captionable {
    /**
     * Message is a photo, available sizes of the photo
     */
    photo: PhotoSize[];
}

interface StickerMessage extends Message {
    /**
     * Message is a sticker, information about the sticker
     */
    sticker: Sticker;
}

interface VideoMessage extends Message, Captionable {
    /**
     * Message is a video, information about the video
     */
    video: Video;
}

interface VoiceMessage extends Message {
    /**
     * Message is a voice message, information about the file
     */
    voice: Voice;
}

interface VideoNoteMessage extends Message {
    /**
     * Message is a video note, information about the video message
     */
    video_note: VideoNote;
}

interface ContactMessage extends Message {
    /**
     * Message is a shared contact, information about the contact
     */
    contact: Contact;
}

interface LocationMessage extends Message {
    /**
     * Message is a shared location, information about the location
     */
    location: Location;
}

interface VenueMessage extends Message {
    /**
     * Message is a venue, information about the venue
     */
    venue: Venue;
}

interface PollMessage extends Message {
    /**
     * Message is a native poll, information about the poll
     */
    poll: Poll;
}

interface NewChatMembers extends Message {
    /**
     * New members that were added to the group or supergroup and information about them (the bot itself may be
     * one of these members)
     */
    new_chat_members: User[];
}

interface LeftChatMember extends Message {
    /**
     * A member was removed from the group, information about them (this member may be the bot itself)
     */
    left_chat_member: User;
}

interface NewChatTitle extends Message {
    /**
     * A chat title was changed to this value
     */
    new_chat_title: string;
}

interface NewChatPhoto extends Message {
    /**
     * A chat photo was change to this value
     */
    new_chat_photo: PhotoSize[];
}

interface DeleteChatPhoto extends Message {
    /**
     * Service message: the chat photo was deleted
     */
    delete_chat_photo: true;
}

interface GroupChatCreated extends Message {
    /**
     * Service message: the group has been created
     */
    group_chat_created: true;
}

interface SupergroupChatCreated extends Message {
    /**
     * Service message: the supergroup has been created. This field can‘t be received in a message coming
     * through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to
     * message if someone replies to a very first message in a directly created supergroup.
     */
    supergroup_chat_created: true;
}

interface ChannelChatCreated extends Message {
    /**
     * Service message: the channel has been created. This field can‘t be received in a message coming through
     * updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if
     * someone replies to a very first message in a channel.
     */
    channel_chat_created: true;
}

interface MigrateToChatId extends Message {
    /**
     * The group has been migrated to a supergroup with the specified identifier. This number may be greater
     * than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is
     * smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this
     * identifier.
     */
    migrate_to_chat_id: number;
}

interface MigrateFromChatId extends Message {
    /**
     * The supergroup has been migrated from a group with the specified identifier. This number may be greater
     * than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is
     * smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this
     * identifier.
     */
    migrate_from_chat_id: number;
}

interface PinnedMessage extends Message {
    /**
     * Specified message was pinned. Note that the Message object in this field will not contain further reply
     * to_message fields even if it is itself a reply.
     */
    pinned_message: Message;
}

interface InvoiceMessage extends Message {
    /**
     * Message is an invoice for a payment, information about the invoice.
     */
    invoice: Invoice;
}

interface SuccessfulPaymentMessage extends Message {
    /**
     * Message is a service message about a successful payment, information about the payment.
     */
    successful_payment: SuccessfulPayment;
}

interface ConnectedWebsiteMessage extends Message {
    /**
     * The domain name of the website on which the user has logged in.
     */
    connected_website: string;
}

interface PassportDataMessage extends Message {
    /**
     * Telegram Passport data
     */
    passport_data: PassportData;
}

type ForwardedMessage = (ForwardDate & ForwardFrom) | {};

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

type TelegramMessage = (ContentfulMessage & ForwardedMessage) | ServiceMessage;

export default TelegramMessage;
