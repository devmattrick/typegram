import { DecoderError, Result } from '@mojotech/json-type-validation';
import Message from '../models/core/Message';
import Update from '../models/core/Update';

type BaseParamType = string | number | boolean | null | undefined;
export type ParamType = BaseParamType | BaseParamType[];
export type Params = Record<string, ParamType>;

export type TelegramResponse =
    | {
          ok: true;
          description?: string;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          result: any;
      }
    | {
          ok: false;
          description: string;
          error_code: number;
          parameters?: {
              migrate_to_chat_id: number;
              retry_after: number;
          };
      };

export interface Method<M extends string, P extends Params, T> {
    method: M;
    params: P;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parse: (arg0: any) => Result.Result<T, DecoderError>;
}

export interface BotError {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
}

export interface Bot {
    on(type: 'error', callback: (error: BotError) => void): void;
    on(type: 'update', callback: (update: Update) => void): void;
    on(type: 'message', callback: (message: Message) => void): void;
    emit(type: 'error', error: BotError): void;
    emit(type: 'update', update: Update): void;
    emit(type: 'message', message: Message): void;
    execute: <M extends string, P extends Params, T>(
        method: Method<M, P, T>
    ) => Promise<T>;
}

export interface BotModuleEvents {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface BotModule<N extends string, E extends BotModuleEvents> {
    name: N;
    on: OnEventFunction<E>;
    onRegister: (bot: Bot) => void;
}

/*
 * e.g. if your module has two events:
 * 1) 'inlineQuery' which has fires InlineQuery events
 * 2) 'callbackQuery' which has fires CallbackQuery events
 * consumers can specify one, and the callback will be
 * strongly-typed to only take an event of the correct event type!
 */
type OnEventFunction<T extends BotModuleEvents> = <K extends keyof T>(
    event: K,
    callback: (event: T[K]) => void
) => void;
