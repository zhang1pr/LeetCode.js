/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const factorial = [1];
  const nums = [...new Array(n)].map((value, index) => index + 1);
  let result = "";
  let product = 1;
  let i;
  let index;

  for (i = 1; i <= n; i++) {
    product *= i;
    factorial.push(product);
  }

  k--;
  for (i = 1; i <= n; i++) {
    index = Math.floor(k / factorial[n-i]);
    result += nums[index].toString();
    nums.splice(index, 1);
    k -= index * factorial[n-i];
  }

  return result;
};

// time:  O(1)
// space: O(1)

// test cases:
// 1, 1
// 2, 1
// 2, 2
// 3, 3
// 3, 4
// 4, 9
