'use strict';

const notes = require('./notes/notes.js');
const argv = require('yargs')
    .usage('Usage: $0 <cmd> --title [string] --body [string]')
    .example('node notes.js add --title \'title add new\' --body \'body add new\'')
    .example('node notes.js add -t \'title add new\' -b \'body add new\'')
    .example('node notes.js <cmd> --title=\'Title of a note\' --body=\'Body of a note\'')
    .example('node index.js sort --kind kind --options ascending')
    .alias('t', 'title').nargs('t', 1).describe('t', 'Title of a note')
    .alias('b', 'body').nargs('b', 1).describe('b', 'Body of a note')
    .alias('kind', 'k').nargs('k', 1)
    .describe('k', 'kind of sort. Can be [note length, nlength, nl], [title length, tlength, tl], [title alphabet, tl], [date, d]')
    .alias('options', 'o').nargs('o', 1)
    .describe('o', 'Options of sort.\nValid options: descending or [<](default), ascending or [>]')
    .help('h').alias('h', 'help')
    .epilog('Created by Dzmitry Karneyenka')
    .demandCommand(1, 'You need enter one command before moving on')
    .command(['add', 'a'], 'add a new note', (yargs) => {
        yargs.options('t', { demand: true, desc: 'Title of a note' });
        yargs.options('b', { demand: true, desc: 'Body of a note' });
    }, function (argv) {
        const result = notes.add(argv.title, argv.body);
        console.log(result);
    })
    .command(['list', 'ls'], 'show all notes', (yargs) => { }, () => {
        const result = notes.list();
        console.log(result);
    })
    .command(['remove', 'rm'], 'remove a note by title', (yargs) => {
        yargs.options('t', { demand: true, desc: 'Title of a note' });
    }, argv => {
        const result = notes.remove(argv.title);
        console.log(result);
    })
    .command(['read', 'r'], 'read a note by title', (yargs) => {
        yargs.options('t', { demand: true, desc: 'Title of a note' });
    }, argv => {
        const result = notes.read(argv.title);
        console.log(result);
    })
    .command(['clear', 'clr'], 'show all notes', (yargs) => { }, () => {
        const result = notes.clear();
        console.log(result);
    })
    .command(['sort', 's'], 'sort list of notes', (yargs) => {
        yargs.options('k', { demand: false, desc: 'Kind of sort', default: 'ta' });
        yargs.options('o', {
            demand: false,
            desc: 'Options of sort.\nValid options: descending or [<](default), ascending or [>]',
            default: '<'
        });
    }, (argv) => {
        const result = notes.sort(argv.kind, argv.options);
        console.log(result);
    })
    .argv;

