import * as JT from '@mojotech/json-type-validation';

/**
 * This object contains information about one answer option in a poll.
 */
export default interface PollOption {
    /**
     * Option text, 1-100 characters
     */
    text: string;

    /**
     * Number of users that voted for this option
     */
    voter_count: number;
}

export const PollOptionDecoder: JT.Decoder<PollOption> = JT.object({
    text: JT.string(),
    voter_count: JT.number(),
});
