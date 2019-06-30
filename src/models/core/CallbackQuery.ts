import * as JT from '@mojotech/json-type-validation';

import Message, { MessageDecoder } from './Message';
import User, { UserDecoder } from './User';

interface MessagePayload {
    /**
     * Message with the callback button that originated the query. Note that message content and message date
     * will not be available if the message is too old
     */
    message: Message;
}

const MessagePayloadDecoder: JT.Decoder<MessagePayload> = JT.object({
    message: MessageDecoder,
});

interface InlineMessagePayload {
    /**
     * Identifier of the message sent via the bot in inline mode, that originated the query.
     */
    inline_message_id: string;
}

const InlineMessagePayloadDecoder: JT.Decoder<InlineMessagePayload> = JT.object(
    {
        inline_message_id: JT.string(),
    }
);

interface DataPayload {
    /**
     * Data associated with the callback button. Be aware that a bad client can send arbitrary data in this
     * field.
     */
    data: string;
}

const DataPayloadDecoder: JT.Decoder<DataPayload> = JT.object({
    data: JT.string(),
});

interface GameShortNamePayload {
    /**
     * Short name of a Game to be returned, serves as the unique identifier for the game
     */
    game_short_name: string;
}

const GameShortNamePayloadDecoder: JT.Decoder<GameShortNamePayload> = JT.object(
    {
        game_short_name: JT.string(),
    }
);

interface CallbackQuery {
    /**
     * Unique identifier for this query
     */
    id: string;

    /**
     * Sender
     */
    from: User;

    /**
     * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent.
     * Useful for high scores in games.
     */
    chat_instance: string;
}

const BaseCallbackQueryDecoder: JT.Decoder<CallbackQuery> = JT.object({
    id: JT.string(),
    from: UserDecoder,
    chat_instance: JT.string(),
});

/**
 * This type represents an incoming callback query from a callback button in an inline keyboard. If the button that
 * originated the query was attached to a message sent by the bot, the field message will be present. If the button was
 * attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of
 * the fields data or game_short_name will be present.
 */
type TelegramCallbackQuery = CallbackQuery &
    (MessagePayload | InlineMessagePayload) &
    (DataPayload | GameShortNamePayload);

export default TelegramCallbackQuery;

export const CallbackQueryDecoder = JT.intersection(
    BaseCallbackQueryDecoder,
    JT.union(MessagePayloadDecoder, InlineMessagePayloadDecoder),
    JT.union(DataPayloadDecoder, GameShortNamePayloadDecoder)
);
