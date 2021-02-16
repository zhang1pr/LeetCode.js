/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  num = [...num.toString()];
  const arr = Array(10).fill(0);

  for (let i = 0; i < num.length; i++) {
    arr[num[i]] = i;
  }

  for (let i = 0; i < num.length; i++) {
    for (let d = 9; d > Number(num[i]); d--) {
      if (arr[d] > i) {
        [num[i], num[arr[d]]] = [num[arr[d]], num[i]];
        return Number(num.join(''));
      }
    }
  }

  return Number(num.join(''));
};

// time:  O(log(n))
// space: O(1)

// 0
// 1
// 10
// 2736
// 9973
