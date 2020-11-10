const { difference }  = require('loadsh');

const array = [3, 3, 3, 2, 1];
const result = difference(array, [4, 2], [1]);

console.log(result);