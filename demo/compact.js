const { compact }  = require('loadsh');

const array = [1, false, undefined, null, 0, NaN, '', 5];
const result = compact(array);

console.log(result);