import * as JT from '@mojotech/json-type-validation';

import PollOption, { PollOptionDecoder } from './PollOption';

/**
 * This object contains information about a poll.
 */
export default interface Poll {
    /**
     * Unique poll identifier
     */
    id: string;

    /**
     * Poll question, 1-255 characters
     */
    question: string;

    /**
     * List of poll options
     */
    options: PollOption[];

    /**
     * true, if the poll is closed
     */
    is_closed: boolean;
}

export const PollDecoder: JT.Decoder<Poll> = JT.object({
    id: JT.string(),
    question: JT.string(),
    options: JT.array(PollOptionDecoder),
    is_closed: JT.boolean(),
});
