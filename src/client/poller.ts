import * as JT from '@mojotech/json-type-validation';

import { GetUpdates } from './method/get-updates';
import { UpdateDecoder } from '../models/core/Update';
import { Bot } from './types';

const UpdatesDecoder = JT.array(UpdateDecoder);

export class Poller {
    private readonly bot: Bot;

    private currentOffset: number | undefined;

    public constructor(bot: Bot) {
        this.bot = bot;
    }

    public readonly start = () => {
        const runPoller = (): Promise<void> =>
            new Promise((resolve, reject) => {
                this.poll()
                    .then(resolve, reject)
                    .catch(reject)
                    .then(runPoller);
            });
        runPoller();
    };

    public readonly poll = async () => {
        const getUpdates: GetUpdates = {
            method: 'getUpdates',
            params: {
                offset: this.currentOffset,
                timeout: 30,
            },
            parse: result => UpdatesDecoder.run(result),
        };

        const updates = await this.bot.execute(getUpdates);
        updates.forEach(update => this.bot.emit('update', update));

        this.currentOffset = updates.reduce(
            (prev, curr) =>
                !prev || prev <= curr.update_id ? curr.update_id + 1 : prev,
            this.currentOffset
        );
    };
}
