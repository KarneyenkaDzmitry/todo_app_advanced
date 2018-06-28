'use strict';
const rwdata = require('../util/rwdata.js');
const dateFormatter = require('../util/dateformatter.js');
const sorter = require('../util/sorter.js');
class Notes {
    constructor() { }
    list() {
        let result = '';
        const json = rwdata.reader();
        if (json.notes.length === 0) {
            result = `The list is empty`;
        } else {
            (json.notes).forEach((element, index) => {
                result += `Note №${index + 1}\n Title: [${element.title}]\n Body : [${element.body}]\n Date :[${element.date}]\n`;
            });
        }
        return result;
    }

    read(title) {
        let result = `There isn\'t any notes with title: ${title}.`;
        const json = rwdata.reader()
        if (json.notes.length === 0) {
            result = `The list is empty.`
        } else {
            (json.notes).forEach((element, index) => {
                if (element.title === title) {
                    result = ` Title: [${element.title}]\n Body : [${element.body}]`;
                }
            });
        }
        return result;
    }

    add(newTitle, newBody, marker, date) {
        let json = rwdata.reader();
        for (let i = 0; i < json.notes.length; i++) {
            if (json.notes[i].title === newTitle) {
                if (!marker) {
                    return `The note with title: [${newTitle}] has already existed in the list.`;
                } else {
                    this.remove(newTitle);
                }
            }
        };
        json = rwdata.reader();
        let createDate;
        if (typeof(date)==='string') {
            createDate = date;
        } else {
            createDate = dateFormatter.getStringNewDate();
        }
        const data = {
            title: newTitle,
            body: newBody,
            date: createDate
        };
        json.notes.push(data);
        const ind = rwdata.writer(JSON.stringify(json));
        if (ind === true) {
            return `New note with title: [${newTitle}] and body: [${newBody}] was successfully added or updated to list.`;
        } else {
            return ind;
        }
    }

    remove(title) {
        let json = rwdata.reader();
        let result = `There isn\'t a note with title ${title}`;
        (json.notes).forEach((element, index) => {
            if (element.title === title) {
                json.notes.splice(index, 1);
                rwdata.writer(JSON.stringify(json));
                result = `The note \n Title: ${element.title}\n Body :${element.body}\n was successfully deleted.`;
            }
        });
        return result;
    }

    sort(kind, options) {
        let json = rwdata.reader();
        let result = '';
        if (json.notes.length === 0) {
            result = `The list is empty.`
        } else {
            result = '{"notes":' + JSON.stringify(sorter.sort(json.notes, kind, options)) + '}';
            rwdata.writer(result);
        }
        return this.list();
    }

    clear() {
        rwdata.writer('{"notes":[]}');
        return `The list is empty.`;
    }

    readFromExel(path) {
        let dataFromExel = (rwdata.readerFromExel(path)).split(/\r\n/);
        let result = '[';
        const keys = dataFromExel[0].split(/\t/);
        dataFromExel.splice(0, 1); dataFromExel.splice(dataFromExel.length - 1, 1);
        dataFromExel.forEach(element => {
            const mass = element.split(/\t/);
            result += `{\"${keys[0]}\": \"${mass[0]}\", \"${keys[1]}\": \"${mass[1]}\", \"${keys[2]}\": \"${mass[2]}\"},`;
        });
        result = result.substring(0, result.length - 1) + ']';
        const json = JSON.parse(result);
        json.forEach(element => {
            this.add(element.title, element.body, false, element.date);
        });
    }
    writeToExel(path) {
        try {
            const json = rwdata.reader();
            let data = `title\tbody\tdate\n`;
            json.notes.forEach((element, index) => {
                data += `${element.title}\t${element.body}\t${element.date}\n`
            })
            rwdata.writerExel(path, data.slice(0, -1));
            return "Notes were successfully exported."
        } catch (err) { return err; }
    }
}
module.exports = new Notes();

