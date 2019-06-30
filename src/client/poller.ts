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
        const runPoller = (): NodeJS.Timeout =>
            setTimeout(() => this.poll().then(runPoller), 1000);
        runPoller();
    };

    public readonly poll = async () => {
        const getUpdates: GetUpdates = {
            method: 'getUpdates',
            params: {
                offset: this.currentOffset,
                timeout: 30,
            },
        };

        try {
            const result = await this.bot.execute(getUpdates);

            UpdatesDecoder.runWithException(result).forEach(update =>
                this.bot.emit('update', update)
            );
        } catch (err) {
            this.bot.emit('error', err);
        }
    };
}
