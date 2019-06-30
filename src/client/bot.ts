import Axios, { AxiosInstance } from 'axios';
import { EventEmitter } from 'events';
import * as qs from 'qs';

import { Poller } from './poller';
import { Bot, BotModule, Params, TelegramResponse, Method } from './types';
import { getBaseUrl } from './util';

export class TelegramBot implements Bot {
    // private readonly apiToken: string;

    private readonly axios: AxiosInstance;

    private readonly eventEmitter: EventEmitter;

    private readonly poller: Poller;

    public constructor(apiToken: string) {
        // this.apiToken = apiToken;
        this.axios = Axios.create({
            baseURL: getBaseUrl(apiToken),
        });
        this.eventEmitter = new EventEmitter();
        this.poller = new Poller(this);
    }

    public readonly registerModule = <E>(module: BotModule<E>) => {
        module.onRegister(this);
    };

    public readonly start = () => {
        this.poller.start();
    };

    public readonly on: Bot['on'] = (
        type: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: (arg0: any) => void
    ) => this.eventEmitter.on(type, callback);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public readonly emit: Bot['emit'] = (type: string, value: any) =>
        this.eventEmitter.emit(type, value);

    public readonly execute = async <M extends string, P extends Params, T>(
        method: Method<M, P, T>
    ): Promise<T> => {
        const queryString = qs.stringify(method.params, { skipNulls: true });
        const { data } = await this.axios.get<TelegramResponse>(
            `/${method.method}?${queryString}`
        );

        if (!data.ok) {
            this.emit('error', { type: 'telegram', error: data });
            throw new Error(`ERROR #${data.error_code}: ${data.description}`);
        }

        const result = method.parse(data.result);

        if (result.ok) {
            return result.result;
        }

        this.emit('error', { type: 'json-decode', error: result.error });
        throw new Error(`Error while parsing JSON: ${result.error}`);
    };
}
