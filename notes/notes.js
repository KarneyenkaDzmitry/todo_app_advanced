'use strict';
const rwdata = require('../util/rwdata.js');
const dateFormatter = require('../util/dateformatter.js');
const sorter = require('../util/sorter.js');
const excel4node = require('excel4node');
const xlsx = require('xlsx');

class Notes {
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
            (json.notes).forEach(element => {
                if (element.title === title) {
                    result = ` Title: [${element.title}]\n Body : [${element.body}]`;
                }
            });
        }
        return result;
    }

    add(newTitle, newBody, marker, date) {
        let json = rwdata.reader();
        for (let index = 0; index < json.notes.length; index++) {
            if (json.notes[index].title === newTitle) {
                if (!marker) {
                    return `The note with title: [${newTitle}] has already existed in the list.`;
                } else {
                    this.remove(newTitle);
                }
            }
        };
        json = rwdata.reader();
        let createDate;
        if (typeof (date) === 'string') {
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
        const workbook = xlsx.readFile(path);
        const array = workbook.Sheets.Sheet1;
        xlsx.utils.sheet_to_json(array).forEach(element => {
            this.add(element.title, element.body, false, element.date);
        });
        return
    }

    writeToExel(path) {
        const workbook = new excel4node.Workbook();
        const worksheet = workbook.addWorksheet('Sheet1');
        var style = workbook.createStyle({
            font: {
                color: '#FF0800',
                size: 16
            },
        });
        worksheet.cell(1, 1).string('title').style(style);
        worksheet.cell(1, 2).string('body').style(style);
        worksheet.cell(1, 3).string('date').style(style);
        rwdata.reader().notes.forEach((element, index) => {
            worksheet.cell(index + 2, 1).string(element.title.toString());
            worksheet.cell(index + 2, 2).string(element.body.toString());
            worksheet.cell(index + 2, 3).string(element.date);
        });
        workbook.write(path, err => {
            if (err) {
                return err;
            } else {
                return 'excel file with all notes was created successfuly.';
            }
        });
    }
}
module.exports = new Notes();

