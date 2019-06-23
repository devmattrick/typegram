/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import { existsSync, lstatSync } from 'fs';
import * as glob from 'glob';
import { join, relative } from 'path';
import { OnProjectArgument, RuleUsageConfig } from 'stricter/lib/types';

interface Subdirectory {
    type: 'dir';
    rule: string;
    optional?: boolean;
}

interface File {
    type: 'file';
    optional?: boolean;
}

type Child = File | Subdirectory;

interface FolderRule {
    [key: string]: Child;
}

const checkChild = (config: FolderRule, key: string): Child | string => {
    if (!config || !(key in config)) {
        return `${key}: not found`;
    }

    const obj = config[key];
    if (!obj || !obj.type) {
        return `${key}: type not set`;
    }

    if (obj.type === 'dir') {
        if (typeof obj.rule !== 'string') {
            return `${key}: rule must be a string corresponding to what rule governs this directory`;
        }
        if (typeof obj.optional === 'boolean') {
            return { type: 'dir', rule: obj.rule, optional: obj.optional };
        }
        if (typeof obj.optional === 'undefined') {
            return { type: 'dir', rule: obj.rule };
        }
        return `${key}: optional must be a boolean or not defined`;
    }
    if (obj.type === 'file') {
        if (typeof obj.optional === 'boolean') {
            return { type: 'file', optional: obj.optional };
        }
        if (typeof obj.optional === 'undefined') {
            return { type: 'file' };
        }
        return `${key}: optional must be a boolean or not defined`;
    }
    return `${key}: invalid type, must be 'dir' or 'file'`;
};

type CheckFolderRuleResult = { rule: FolderRule } | { errors: string[] };
const checkFolderRule = (
    config: RuleUsageConfig,
    key: string
): CheckFolderRuleResult => {
    if (!config || !(key in config) || !config[key]) {
        return { errors: [`${key}: not found`] };
    }

    const obj = config[key];
    if (!obj || typeof obj !== 'object') {
        return { errors: [`${key}: invalid value, must be an object`] };
    }

    const rule = {};
    const errors: string[] = [];

    Object.keys(obj).forEach(k => {
        const child = checkChild(obj, k);
        if (typeof child === 'string') {
            errors.push(child);
        } else {
            rule[k] = child;
        }
    });

    return errors.length > 0 ? { errors } : { rule };
};

export const onProject = ({
    config,
    rootPath,
    files,
}: OnProjectArgument): string[] => {
    if (!('*' in config)) {
        return ["You must define the root folder using '*'."];
    }

    const root = checkFolderRule(config, '*');
    if ('errors' in root) {
        return root.errors;
    }

    const errors = [];
    const toProcess: { path: string; rule: FolderRule }[] = [
        { path: rootPath, rule: root.rule },
    ];
    const okayFiles: string[] = [];

    while (toProcess.length > 0) {
        const next = toProcess.shift();

        Object.entries(next.rule).forEach(([entry, cfg]) => {
            let filesToProcess = [];
            if (entry.includes('*')) {
                filesToProcess = glob.sync(entry, { cwd: next.path });
            } else {
                filesToProcess = [entry];
            }

            filesToProcess.forEach(file => {
                const path = join(next.path, file);
                const exists = existsSync(path);
                const relativePath = relative(rootPath, path);
                if (cfg.type === 'file') {
                    if (!cfg.optional && !exists) {
                        errors.push(`${relativePath}: file should exist`);
                    } else if (exists && !lstatSync(path).isFile()) {
                        errors.push(`${relativePath}: should be a file`);
                    } else {
                        okayFiles.push(path);
                    }
                } else if (!cfg.optional && !exists) {
                    errors.push(`${relativePath}: directory should exist`);
                } else if (exists && !lstatSync(path).isDirectory()) {
                    errors.push(`${relativePath}: should be a directory`);
                } else if (exists) {
                    const folderRuleOrErrors = checkFolderRule(
                        config,
                        cfg.rule
                    );
                    if ('errors' in folderRuleOrErrors) {
                        errors.push(...folderRuleOrErrors.errors);
                    } else {
                        toProcess.push({
                            path,
                            rule: folderRuleOrErrors.rule,
                        });
                    }
                }
            });
        });
    }

    Object.keys(files)
        .filter(file => !okayFiles.includes(file))
        .map(file => relative(rootPath, file))
        .forEach(file => errors.push(`${file}: unexpected file`));

    return errors;
};
