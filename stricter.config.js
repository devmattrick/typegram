module.exports = {
    root: 'src',
    rulesDir: 'stricter-rules',
    exclude: /\.DS_Store|\.js$/,
    rules: {
        'project-structure': {
            level: 'error',
            config: {
                '*': {
                    client: { type: 'dir', rule: 'client' },
                    models: { type: 'dir', rule: 'models' },
                    types: { type: 'dir', rule: 'types', optional: true },
                    'index.ts': { type: 'file' },
                },
                client: {
                    'bot.ts': { type: 'file' },
                    'index.ts': { type: 'file' },
                    method: { type: 'dir', rule: 'client/method' },
                    'poller.ts': { type: 'file' },
                    'types.ts': { type: 'file' },
                    'util.ts': { type: 'file' },
                },
                'client/method': {
                    '*.ts': { type: 'file' },
                },
                models: {
                    '*': { type: 'dir', rule: 'models/model' },
                },
                'models/model': {
                    '*.ts': { type: 'file' },
                },
            },
        },
        'stricter/unused-files': [
            {
                level: 'warning',
                include: [/\.ts$/],
                config: {
                    entry: [
                        // index.ts is the typegram root
                        /index\.ts/,

                        // client/index.ts is the typegram client root
                        /client\/index\.ts/,

                        // models/*/*.ts should be kept as they're all the types
                        /models\/[^/]+\/[^/]+\.ts/,
                    ],
                    relatedEntry: [],
                },
            },
        ],
        'stricter/circular-dependencies': [
            {
                level: 'error',
                config: { checkSubTreeCycle: true },
            },
        ],
    },
};
