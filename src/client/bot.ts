import Axios, { AxiosInstance } from 'axios';
import { EventEmitter } from 'events';
import * as qs from 'qs';

import { Bot, BotModule, Params } from './types';
import { getBaseUrl } from './util';

export class TelegramBot implements Bot {
    private readonly apiToken: string;

    private readonly axios: AxiosInstance;

    public readonly eventEmitter: EventEmitter;

    public constructor(apiToken: string) {
        this.apiToken = apiToken;
        this.axios = Axios.create({
            baseURL: getBaseUrl(apiToken),
        });
        this.eventEmitter = new EventEmitter();
    }

    public readonly registerModule = <E>(module: BotModule<E>) => {
        module.onRegister(this);
    };

    public readonly execute = async <T>(
        method: string,
        params: Params
    ): Promise<T> => {
        const queryString = qs.stringify(params, { skipNulls: true });
        const response = await this.axios.get<T>(`/${method}?${queryString}`);
        return response.data;
    };
}
