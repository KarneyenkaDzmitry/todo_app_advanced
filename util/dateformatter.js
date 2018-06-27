'use strict';

let currentDate = new Date();
//const stringD = getStringDate(currentDate)
//console.log(stringD);
//const convertDate = getInstanceDate(stringD);
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
    //console.log(result);
    return new Date(result);
}
//console.log(convertDate.valueOf());

exports.getStringNewDate = getStringNewDate;
exports.getInstanceDate = getInstanceDate;


//exports = {getStringDate: "getStringDate", getInstanceDate:"getInstanceDate", getStringNewDate:"getStringNewDate"};