/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  if (n <= 0) {
    return 0;
  }

  if (n <= 3) {
    return 1;
  }

  const arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 2;
  arr[2] = 2;
  let head = 2;
  let tail = 3;
  let num = 1;
  let res = 1;

  while (tail < n) {
    for (let i = 0; i < arr[head]; i++) {
      arr[tail] = num;

      if (num == 1 && tail < n) {
        res++;
      }

      tail++;
    }

    num ^= 3;
    head++;
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 0
// 1
// 2
// 3
// 4
// 6
