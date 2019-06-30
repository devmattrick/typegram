export interface GetUpdates {
    method: 'getUpdates';
    params: {
        offset?: number;
        limit?: number;
        timeout?: number;
        allowed_updates?: string[];
    };
}
