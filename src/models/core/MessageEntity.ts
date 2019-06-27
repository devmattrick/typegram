import * as JT from '@mojotech/json-type-validation';

import User, { UserDecoder } from './User';

export type MessageEntityType =
    | 'mention'
    | 'hashtag'
    | 'cashtag'
    | 'bot_command'
    | 'url'
    | 'email'
    | 'phone_number'
    | 'bold'
    | 'italic'
    | 'code'
    | 'pre'
    | 'text_link'
    | 'text_mention';

/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 */
interface MessageEntity<Type extends MessageEntityType> {
    /**
     * Type of the entity. Can be mention (@username), hashtag, cashtag, bot_command, url, email, phone_number, bold (bold
     * text), italic (italic text), code (monowidth string), pre (monowidth block), text_link (for clickable text URLs),
     * text_mention (for users without usernames)
     */
    type: Type;

    /**
     * Offset in UTF-16 code units to the start of the entity
     */
    offset: number;

    /**
     * Length of the entity in UTF-16 code units
     */
    length: number;
}

const BasicMessageEntityDecoder: <T extends MessageEntityType>(
    arg0: T
) => JT.Decoder<MessageEntity<T>> = type =>
    JT.object({
        type: JT.constant(type),
        offset: JT.number(),
        length: JT.number(),
    });

interface TextLinkMessageEntity extends MessageEntity<'text_link'> {
    /**
     * For “text_link” only, url that will be opened after user taps on the text
     */
    url: string;
}

const TextLinkMessageEntityDecoder: JT.Decoder<
    TextLinkMessageEntity
> = JT.object({
    type: JT.constant('text_link'),
    offset: JT.number(),
    length: JT.number(),
    url: JT.string(),
});

interface TextMentionMessageEntity extends MessageEntity<'text_mention'> {
    /**
     * For “text_mention” only, the mentioned user
     */
    user: User;
}

const TextMentionMessageEntityDecoder: JT.Decoder<
    TextMentionMessageEntity
> = JT.object({
    type: JT.constant('text_mention'),
    offset: JT.number(),
    length: JT.number(),
    user: UserDecoder,
});

type TelegramMessageEntity =
    | MessageEntity<'mention'>
    | MessageEntity<'hashtag'>
    | MessageEntity<'cashtag'>
    | MessageEntity<'bot_command'>
    | MessageEntity<'url'>
    | MessageEntity<'email'>
    | MessageEntity<'phone_number'>
    | MessageEntity<'bold'>
    | MessageEntity<'italic'>
    | MessageEntity<'code'>
    | MessageEntity<'pre'>
    | TextLinkMessageEntity
    | TextMentionMessageEntity;

export default TelegramMessageEntity;

export const MessageEntityDecoder: JT.Decoder<TelegramMessageEntity> = JT.union(
    TextLinkMessageEntityDecoder,
    TextMentionMessageEntityDecoder,
    BasicMessageEntityDecoder('mention'),
    BasicMessageEntityDecoder('hashtag'),
    BasicMessageEntityDecoder('cashtag'),
    BasicMessageEntityDecoder('bot_command'),
    BasicMessageEntityDecoder('url'),
    JT.union(
        BasicMessageEntityDecoder('email'),
        BasicMessageEntityDecoder('phone_number'),
        BasicMessageEntityDecoder('bold'),
        BasicMessageEntityDecoder('italic'),
        BasicMessageEntityDecoder('code'),
        BasicMessageEntityDecoder('pre')
    )
);
