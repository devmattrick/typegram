/* eslint-disable no-console */

import { TelegramBot } from './client';

const apiToken: string | undefined = process.env.BOT_TOKEN;

if (!apiToken) {
    console.error(
        'Invalid bot token. Set it using the BOT_TOKEN environment variable.'
    );
    process.exit(1);
} else {
    const bot = new TelegramBot(apiToken);
    bot.on('update', update => console.log(JSON.stringify(update)));
    bot.start();
}
