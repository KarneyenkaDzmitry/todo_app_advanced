'use strict';
function main(){
const notes = require('./notes/notes.js');
const argv = require('yargs')
    .usage('Usage: $0 <cmd> --title [string] --body [string]')
    .usage('Usage: $0 sort --kind [string] --options [string]')
    .usage('Usage: $0 <cmd> --file [path to file.xlsx]')
    .example('node notes.js add --title \'title add new\' --body \'body add new\'')
    .example('node notes.js add -t \'title add new\' -b \'body add new\'')
    .example('node notes.js <cmd> --title=\'Title of a note\' --body=\'Body of a note\'')
    .example('node index.js sort --kind kind --options ascending')
    .example('node index.js readExel --file ./resources/notes.xlsx')
    .example('node index.js writeExel --file ./resources/notes.xlsx')
    .alias('t', 'title').nargs('t', 1).describe('t', 'Title of a note')
    .alias('b', 'body').nargs('b', 1).describe('b', 'Body of a note')
    .alias('kind', 'k').nargs('k', 1)
    .describe('k', 'kind of sort. Can be [note length, nlength, nl], [title length, tlength, tl], [title alphabet, tl], [date, d]')
    .alias('options', 'o').nargs('o', 1)
    .describe('o', 'Options of sort.\nValid options: descending or [<](default), ascending or [>]')
    .alias('file', 'f').nargs('f', 1).describe('f', 'Path to file')
    .help('h').alias('h', 'help')
    .epilog('Created by Dzmitry Karneyenka')
    .demandCommand(1, 'You need enter one command before moving on')
    .command(['add', 'a'], 'add a new note', (yargs) => {
        yargs.options('t', { demand: true, desc: 'Title of a note' });
        yargs.options('b', { demand: true, desc: 'Body of a note' });
    }, function (argv) {
        const result = notes.add(argv.title, argv.body, false);
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
    .command(['update', 'u'], 'update an existing note or add new if it doesn\'t exist before', (yargs) => {
        yargs.options('t', { demand: true, desc: 'Title of a note' });
        yargs.options('b', { demand: true, desc: 'Body of a note' });
    }, function (argv) {
        const result = notes.add(argv.title, argv.body, true);
        console.log(result);
    })
    .command(['readExel', 'rex'], 'Read notes from Exel file', (yargs) => { 
        yargs.options('f', {demant: true, description: 'path to Exel-file'});
    }, (argv) => {
        const result = notes.readFromExel(argv.file);
        console.log(result);
    })
    .command(['writeExel', 'wex'], 'Write notes to Exel file', (yargs) => { 
        yargs.options('f', {demant: true, description: 'path to file'});
    }, (argv) => {
        const result = notes.writeToExel(argv.file);
        console.log(result);
    })
    .argv;
}
main();