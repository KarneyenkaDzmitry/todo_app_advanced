'use strict';
const dateFormatter = require('./dateformatter.js');

function descendingSort(array, kind) {
    switch (kind) {
        case 'date': case 'd':
            return array.sort((a, b) =>
                dateFormatter.getInstanceDate(b.date).valueOf() - dateFormatter.getInstanceDate(a.date).valueOf());
        case 'note length': case 'nlength': case 'nl':
            return array.sort((a, b) => (b.title + b.body).length - (a.title + a.body).length);
        case 'title length': case 'tlength': case 'tl':
            return array.sort((a, b) => (b.title.length - a.title.length));
        case 'title alphabet': case 'talph': case 'ta':
            return array.sort();
    }
}
function ascendingSort(array, kind) {
    switch (kind) {
        case 'date': case 'd':
            return array.sort((a, b) =>
                dateFormatter.getInstanceDate(a.date).valueOf() - dateFormatter.getInstanceDate(b.date).valueOf());
        case 'note length': case 'nlength': case 'nl':
            return array.sort((a, b) => (a.title + a.body).length - (b.title + b.body).length);
        case 'title length': case 'tlength': case 'tl':
            return array.sort((a, b) => (a.title.length - b.title.length));
        case 'title alphabet': case 'talph': case 'ta':
            array.sort();
            return array.reverse();
    }
}

function sort(array, kind, arg) {
    switch (arg) {
        case '<': case 'descending': case 'des': case 'd':
            return descendingSort(array, kind);
        case '>': case 'ascending': case 'asc': case 'a':
            return ascendingSort(array, kind);
    }
}
exports.sort = sort;