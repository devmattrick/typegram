import { Method } from '../types';
import Update from '../../models/core/Update';

export type GetUpdates = Method<
    'getUpdates',
    {
        offset?: number;
        limit?: number;
        timeout?: number;
        allowed_updates?: string[];
    },
    Update[]
>;
