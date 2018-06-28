'use strict';
const dateFormatter = require('./dateformatter.js');

function desSotrt(mass, kind) {
    switch (kind) {
        case 'date': case 'd':
            return mass.sort((a, b) =>
                dateFormatter.getInstanceDate(b.date).valueOf() - dateFormatter.getInstanceDate(a.date).valueOf());
        case 'note length': case 'nlength': case 'nl':
            return mass.sort((a, b) => (b.title + b.body).length - (a.title + a.body).length);
        case 'title length': case 'tlength': case 'tl':
            return mass.sort((a, b) => (b.title.length - a.title.length));
        case 'title alphabet': case 'talph': case 'ta':
            //return mass.sort();
            return mass.sort((a, b)=>b.title.toString().toLowerCase() > a.title.toString().toLowerCase());
    }
}
function asSort(mass, kind) {
    switch (kind) {
        case 'date': case 'd':
            return mass.sort((a, b) =>
                dateFormatter.getInstanceDate(a.date).valueOf() - dateFormatter.getInstanceDate(b.date).valueOf());
        case 'note length': case 'nlength': case 'nl':
            return mass.sort((a, b) => (a.title + a.body).length - (b.title + b.body).length);
        case 'title length': case 'tlength': case 'tl':
            return mass.sort((a, b) => (a.title.length - b.title.length));
        case 'title alphabet': case 'talph': case 'ta':
            mass.sort();
            return mass.reverse();
            return mass.sort((a, b)=>a.title.toString().toLowerCase() > b.title.toString().toLowerCase());
    }

}

function sort(mass, kind, arg) {
    switch (arg) {
        case '<': case 'descending': case 'des':
            return desSotrt(mass, kind);
        case '>': case 'ascending': case 'asc':
            return asSort(mass, kind);
    }
}
exports.sort = sort;