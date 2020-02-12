export const getBaseUrl = (apiToken: string): string =>
    `https://api.telegram.org/bot${apiToken}`;
