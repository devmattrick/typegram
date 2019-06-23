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
                    'index.ts': { type: 'file' },
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
                include: [/\*\.ts/],
                config: {
                    entry: [
                        /foo\.eslintrc\.js/,
                        /foo\.*\.md/,
                        /foo\/bar\/index\.js/,
                        /foo\/baz\/index\.js/,
                    ],
                    relatedEntry: [
                        /foo\.*spec\.js/,
                        /foo\.*test\.js/,
                        /foo\.*story\.js/,
                    ],
                },
            },
        ],
        'stricter/circular-dependencies': [
            {
                level: 'error',
                config: {
                    checkSubTreeCycle: true,
                    registries: ['**/foo/bar', 'baz'],
                },
            },
        ],
    },
};
