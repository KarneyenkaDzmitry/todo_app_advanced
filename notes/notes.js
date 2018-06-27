'use strict';
const rwdata = require('../util/rwdata.js');
const dateFormatter = require('../util/dateformatter.js');
const sorter = require('../util/sorter.js');

function list() {
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

function read(title) {
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

function add(newTitle, newBody) {
    let json = rwdata.reader();
    for (let i = 0; i < json.notes.length; i++) {
        if (json.notes[i].title === newTitle) {
            return `The note with title: [${newTitle}] has already existed in the list.`;
        }
    };

    const data = {
        title: newTitle,
        body: newBody,
        date: dateFormatter.getStringNewDate()
    };
    json.notes.push(data);
    const ind = rwdata.writer(JSON.stringify(json));
    if (ind === true) {
        return `New note with title: [${newTitle}] and body: [${newBody}] was successfully added to list.`;
    } else {
        return ind;
    }
}

function remove(title) {
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

function sort(kind, options) {
    let json = rwdata.reader();
    let result = '';
    if (json.notes.length === 0) {
        result = `The list is empty.`
    } else {
        result = '{"notes":' + JSON.stringify(sorter.sort(json.notes, kind, options)) + '}';
        rwdata.writer(result);
    }
    return list();
}

function clear() {
    rwdata.writer('{"notes":[]}');
    return `The list is empty.`;
}

exports.clear = clear;
exports.remove = remove;
exports.add = add;
module.exports.read = read;
exports.list = list;
exports.sort = sort;
