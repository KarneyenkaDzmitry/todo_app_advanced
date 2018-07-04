# todo_app_advanced version 1.1.0 ([AT Lab#19])

The application helps to make a todo list with notes.<br>
A note includes title and a body with description of the note.<br>
Every note has created date. Advanced version has some new features that doesn't have before.

## Implementation

### Dependencies

The application needs to have the following dependencies:
1. npm --version 6.1.0
2. node --version 8.11.3

### Deploy

#### $ npm install

Before start the program is supposed to run the command [npm install].<br> 
It downloads needed modules and prepars the programm for start.<br>
There is a list of modules and their versions:
* yargs      version  ^11.0.0
* xlsx       version   0.13.1
* excel4node version  ^1.3.6

## Usage

#### Available commands:
- [Help](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#help-message-with-hints-about-usage-the-programm)
- [Add a new note](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#add-a-new-note)
- [Remove a note](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#remove-a-note)
- [Read a note](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#read-a-note)
- [Show list of all notes](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#show-list-of-all-notes)
- [Clear list of notes](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#clear-list-of-notes)
- [Update a note by title](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#update-a-note-by-title)
- [Sort list of notes](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#sort-list-of-notes)
#### Advanced usage:
- [Write all notes to excel file](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#write-all-notes-to-excel-file)
- [Read notes from excel file and add them into todo_app's list](https://github.com/KarneyenkaDzmitry/todo_app_advanced/tree/master/#read-notes-from-excel-file-and-add-them-into-todo_app's-list)

### help message with hints about usage the programm

#### $ node index.js --help

### add a new note

#### $ node index.js add --title 'Title of note' --body 'Body of note'

Command [add] creates new note with title [Title of note] and a body [Body of note].<br>
Also the programm add current(created) date and time as a property date to each note.

### remove a note

#### $ node index.js remove --title 'Title of note'

Command [remove] removes a note with title [Title of note] if it es on the list and write on console about success of operation.<br>
If there isn't a note with title [Title of note] the program write a message on console about that. 

### read a note

#### $ node index.js read --title 'Title of note'

Command [read] shows a note with title [Title of note]. In other words show all note with body and created date.<br>

### show list of all notes

#### $ node index.js list

Command [list] shows all notes on console.<br>


### clear list of notes

#### $ node index.js clear

Command [clear] delete all notes. The list becomes empty.<br>

### update a note by title

#### $ node index.js update --title 'Title of a note' --body 'Body of a note'

Command [update] body of existed note with title [Title of a note].<br>
If there isn't a note with title [Title of a note] the programm shows a message on console.<br>

### sort list of notes

#### $ node index.js sort --kind 'note length' --options 'ascending'

Command [sort] allowes to sort all notes by `kind of sort` with ascending or descending direction of the sort.<br>
##### kind (requirement)
- note lenth, title length, title alphabet, date.<br>
##### options (can omit because default is [descending])
- ascending, descending.

## Advanced usage

### write all notes to excel file 

#### $ node index.js writeExcel --file 'Path to result file'

Write excel.xlsx file with all notes from todo_app_advanced list.

### read notes from excel file and add them into todo_app's list

#### $ node index.js readExcel --file 'Path to result file'

Read all notes from excel file and add them into todo_app_advanced list.<br>
If there is a note with the same title in the list, the application ignores it.

### Author
#### Dzmitry_Karneyenka, Republic of Belarus, Minsk


 ## Examples of usage
----------------------
Command Line Arguments
----------------------

##Help:<br> 
  node index.js --help.

##Usage:<br>
  index.js <cmd> --title [string] --body [string]<br>
  index.js sort --kind [string] --options [string]<br>
  index.js <cmd> --file [path to file.xlsx]<br>

##Commands:<br>
  index.js add        add a new note                                [aliases: a]<br>
  index.js list       show all notes                               [aliases: ls]<br>
  index.js remove     remove a note by title                       [aliases: rm]<br>
  index.js read       read a note by title                          [aliases: r]<br>
  index.js clear      show all notes                              [aliases: clr]<br>
  index.js sort       sort list of notes                            [aliases: s]<br>
  index.js update     update an existing note or add new if it doesn't exist
                      before                                        [aliases: u]<br>
  index.js readExel   Read notes from Exel file                   [aliases: rex]<br>
  index.js writeExel  Write notes to Exel file                    [aliases: wex]<br>

##Options:<br>
  --version       Show version number                                  [boolean]<br>
  -t, --title     Title of a note<br>
  -b, --body      Body of a note<br>
  --Path to file<br>
  -h, --help      Show help                                            [boolean]<br>
  --kind, -k      kind of sort. Can be [note length, nlength, nl], [title<br>
                  length, tlength, tl], [title alphabet, tl], [date, d]<br>
  --options, -o   Options of sort.
                  Valid options: descending or [<](default), ascending or [>]

##Examples:
  node notes.js add --title 'title add new' --body 'body add new'
  node notes.js add -t 'title add new' -b 'body add new'
  node notes.js <cmd> --title='Title of a note' --body='Body of a note'
  node index.js sort --kind kind --options ascending
  node index.js readExel --file ./resources/notes.xlsx
  node index.js writeExel --file ./resources/notes.xlsx

###Created by Dzmitry Karneyenka
