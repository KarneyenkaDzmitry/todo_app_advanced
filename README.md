# todo_app_advanced

[AT Lab#19] 

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
