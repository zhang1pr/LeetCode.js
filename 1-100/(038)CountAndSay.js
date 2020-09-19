/**
 * @param {number} n
 * @return {resing}
 */
var countAndSay = function(n) {
  let res = '1';

  for (let i = 1; i < n; i++) {
    nextres = '';
    let count = 1;

    for (let j = 0; j < res.length; j++) {
      if (res[j] != res[j+1]) {
        nextres += count.toString() + res[j];
        count = 1;
      } else {
        count++;
      }
    }

    res = nextres;
  }

  return res;
};

// time:  O(1)
// space: O(1)

// 1
// 5
// 30
