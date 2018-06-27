'use strict';
const fs = require('fs');
const list = './data/list.json';

function reader() {
    try {
        return JSON.parse(fs.readFileSync(list, 'utf8'));
    } catch (error) {
        return error;
    }
}

function writer(data) {
    try {
        fs.writeFileSync(list, data, 'utf8');
        return true;
    } catch (error) {
        return error;
    }
}
exports.reader = reader;
exports.writer = writer;