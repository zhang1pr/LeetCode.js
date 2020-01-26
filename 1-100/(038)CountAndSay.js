/**
 * @param {number} n
 * @return {resulting}
 */
var countAndSay = function(n) {
  let result = '1';

  for (let i = 1; i < n; i++) {
    nextResult = '';
    let count = 1;

    for (let j = 0; j < result.length; j++) {
      if (result[j] != result[j+1]) {
        nextResult += count.toString() + result[j];
        count = 1;
      } else {
        count++;
      }
    }

    result = nextResult;
  }

  return result;
};

// time:  O(1)
// space: O(1)

// test cases:
// 1
// 5
// 30
