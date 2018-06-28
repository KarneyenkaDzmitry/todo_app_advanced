'use strict';

const first = ['asfdagalfghdfl', 'sdfgds', 'sd', 'safasfkhkhklglfj', 'gfsdgf', 'asd', 'ASD', 'BDG', 'HTG'];
console.log('First: ' + first.sort((a, b) => a - b));

const second = ['asfdagalfghdfl', 'sdfgds', 'sd', 'safasfkhkhklglfj', 'gfsdgf', 'asd', 'ASD', 'BDG', 'HTG'];
console.log('Second: ' + second.sort((a, b) => b - a));


const third = ['asfdagalfghdfl', 'sdfgds', 'sd', 'safasfkhkhklglfj', 'gfsdgf', 'asd', 'ASD', 'BDG', 'HTG'];
console.log('Third: ' + third.sort((a, b) => a.toString().toLowerCase() > b.toString().toLowerCase()));

const fourth = ['asfdagalfghdfl', 'sdfgds', 'sd', 'safasfkhkhklglfj', 'gfsdgf', 'asd', 'ASD', 'BDG', 'HTG'];
console.log('Fourth: ' + fourth.sort((a, b) => a.toString().toLowerCase() < b.toString().toLowerCase()));

const fifth = ['asfdagalfghdfl', 'sdfgds', 'sd', 'safasfkhkhklglfj', 'gfsdgf', 'asd', 'ASD', 'BDG', 'HTG'];
console.log('Fifth: ' + fifth.sort());

const sixth = ['asfdagalfghdfl', 'sdfgds', 'sd', 'safasfkhkhklglfj', 'gfsdgf', 'asd', 'ASD', 'BDG', 'HTG'];
console.log('Sixth: ' + sixth.sort().reverse());