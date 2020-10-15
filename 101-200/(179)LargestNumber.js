/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const res = nums
    .map(n => n.toString())
    .sort((a, b) => {
      for (let k = 0; k < a.length + b.length; k++) {
        const i = k % a.length;
        const j = k % b.length;

        if (a[i] > b[j]) {
          return -1;
        } else if (a[i] < b[j]) {
          return 1;
        }
      }

      return 0;
    }).join('');

  return res[0] == '0' ? '0' : res;
};

// time:  O(nlog(n))
// space: O(n)

// [0]
// [1]
// [10, 2]
// [2, 10]
// [1, 10, 0, 111]
// [3, 30, 34, 5, 9]
