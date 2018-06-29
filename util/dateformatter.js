'use strict';

function getStringNewDate() { 
    const date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function getStringDate(date) {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function getInstanceDate(stringDate) {
    let array = stringDate.split(/\s/);
    let array1 = array[0].split('/');
    return new Date(`${array1[1]}/${array1[0]}/${array1[2]} ${array[1]}`);
}
exports.getStringNewDate = getStringNewDate;
exports.getInstanceDate = getInstanceDate;