#!/usr/bin/env node
'use strict';
const fs = require('fs');

// noinspection BadExpressionStatementJS
require('yargs')
    .usage('Usage: html2oembed <command> [options]')
    .demandCommand(1, 'Must provide a valid command')
    .command({
        command: 'convert <input> <output>',
        desc: 'Convert an HTML file to oEmbed JSON',
        builder: (yargs) => yargs
            .usage('Usage: html2oembed convert <input> <output> [options]')
            .positional('input', {
                describe: 'The HTML source file',
                normalize: true,
                type: 'string'
            })
            .positional('output', {
                describe: 'The JSON output file',
                normalize: true,
                type: 'string'
            })
            .option('quiet', {
                describe: 'Do not output any messages',
                alias: 'q',
                default: false,
                type: 'boolean'
            }),
        handler: (argv) => {
            const html = fs.readFileSync(argv.input, 'utf8');
            const parsed = require('../src/parse')(html);
            const json = JSON.stringify(parsed);

            fs.writeFileSync(argv.output, json);

            if (!argv.quiet) {
                process.stdout.write("HTML converted to oEmbed JSON");
            }
        }
    })
    .alias('help', 'h')
    .alias('version', 'v')
    .strict()
    .wrap(null)
    .argv;
