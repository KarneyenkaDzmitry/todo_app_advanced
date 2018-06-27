'use strict';

function getStringNewDate() { 
    const date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function getStringDate(date) {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function getInstanceDate(stringDate) {
    let mass = stringDate.split(/\s/);
    let mass1 = mass[0].split('/');
    let result = `${mass1[1]}/${mass1[0]}/${mass1[2]} ${mass[1]}`;
    return new Date(result);
}
exports.getStringNewDate = getStringNewDate;
exports.getInstanceDate = getInstanceDate;