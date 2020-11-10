const { chunk }  = require('loadsh');

const array = [1, 2, 3, 4, 5];
const result = chunk(array, 2);

console.log(result);