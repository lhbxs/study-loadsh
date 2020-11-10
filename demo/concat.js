const { concat }  = require('loadsh');

const array = [1];
const result = concat(array, 2, [3], [[4]]);

console.log(result);