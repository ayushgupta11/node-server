#!/usr/bin/env node

const yargs = require('yargs')
const defaultFunc = require('../lib/default.service')

yargs.command(
    'init [name]',
    'create project',
    (yargs) => {
        // yargs.positional('channel', { describe: 'The channel to send the message to', default: 'test' });
    },
    (argv) => {
        let { name } = argv
        defaultFunc(name)
    }
)

yargs.argv;