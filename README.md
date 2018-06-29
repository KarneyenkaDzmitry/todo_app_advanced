# todo_app_advanced
[AT Lab#19] 

##Help: node index.js --help.

##Usage:
  index.js <cmd> --title [string] --body [string]
  index.js sort --kind [string] --options [string]
  index.js <cmd> --file [path to file.xlsx]

##Commands:
  index.js add        add a new note                                [aliases: a]
  index.js list       show all notes                               [aliases: ls]
  index.js remove     remove a note by title                       [aliases: rm]
  index.js read       read a note by title                          [aliases: r]
  index.js clear      show all notes                              [aliases: clr]
  index.js sort       sort list of notes                            [aliases: s]
  index.js update     update an existing note or add new if it doesn't exist
                      before                                        [aliases: u]
  index.js readExel   Read notes from Exel file                   [aliases: rex]
  index.js writeExel  Write notes to Exel file                    [aliases: wex]

##Options:
  --version       Show version number                                  [boolean]
  -t, --title     Title of a note
  -b, --body      Body of a note
  --Path to file
  -h, --help      Show help                                            [boolean]
  --kind, -k      kind of sort. Can be [note length, nlength, nl], [title
                  length, tlength, tl], [title alphabet, tl], [date, d]
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
