const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


 function countCats(array){
  let result = 0;
  for (item of array) {
    for (i of item) {
      if (i === '^^')
      result++;
    }
  }
  return result;
}



module.exports = {
  countCats
};
