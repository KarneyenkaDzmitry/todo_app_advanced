'use strict';
const obj = require('../util/rwdata.js');

function list() {
    let result = '';
    const json = obj.reader();
    if (json.notes.length === 0) {
        result = `The list is empty`;
    } else {
        (json.notes).forEach((element, index) => {
            result += `Note №${index + 1}\n Title: [${element.title}]\n Body : [${element.body}]\n`;
        });
    }
    return result;
}

function read(title) {
    let result = `There isn\'t any notes with title: ${title}.`;
    const json = obj.reader()
    if (json.notes.length===0){
        result = `The list is empty.`
    } else {
        (json.notes).forEach((element, index) => {
            if (element.title === title) {
                result =  ` Title: [${element.title}]\n Body : [${element.body}]`;
            }
        });
    }
     return result;
}

function add(newTitle, newBody) {
    let json = obj.reader();
    for (let i = 0; i < json.notes.length; i++) {
        if (json.notes[i].title === newTitle) {
            return `The note with title: [${newTitle}] has already existed in the list.`;
        }
    };
    const data = {
        title: newTitle,
        body: newBody
    };
    json.notes.push(data);
    const ind = obj.writer(JSON.stringify(json));
    if (ind===true) {
        return `New note with title: [${newTitle}] and body: [${newBody}] was successfully added to list.`;
    } else {
        return ind;
    }
}

function remove(title) {
    let json = obj.reader();
    let result = `There isn\'t a note with title ${title}`;
    (json.notes).forEach((element, index) => {
        if (element.title === title) {
            json.notes.splice(index, 1);
            obj.writer(JSON.stringify(json));
            result = `The note \n Title: ${element.title}\n Body :${element.body}\n was successfully deleted.`;
        }
    });
    return result;
}

function clear() {
    obj.writer('{"notes":[]}');
    return `The list is empty.`;
}
exports.clear = clear;
exports.remove = remove;
exports.add = add;
module.exports.read = read;
exports.list = list;
