const { fill }  = require('loadsh');

const array1 = [1, 2, 3];
const array2 = Array(3);
const array3 = [4, 6, 8, 10];

fill(array1, 'a');
fill(array2, 2);
fill(array3, '*', 1, 3);

console.log(array1);
console.log(array2);
console.log(array3);