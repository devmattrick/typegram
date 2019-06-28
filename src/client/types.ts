import { EventEmitter } from 'events';

type BaseParamType = string | number | boolean | null | undefined;
export type ParamType = BaseParamType | BaseParamType[];
export type Params = Record<string, ParamType>;

export type TelegramResponse<T> =
    | {
          ok: true;
          description?: string;
          result: T;
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

export interface Bot {
    eventEmitter: EventEmitter;
    execute: <T>(config: { method: string; params: Params }) => Promise<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BotModule<E extends Record<string, any>> {
    name: string;
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OnEventFunction<T extends Record<string, any>> = <K extends keyof T>(
    event: K,
    callback: (event: T[K]) => void
) => void;
