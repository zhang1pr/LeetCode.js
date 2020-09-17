/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
  let res = 0;
  let a = 1;
  let A = 1;
  let d = 1;
  const arr = Array(s.length).fill(0);

  for (let i = 0; i < arr.length;) {
    if (/[a-z]/.test(s[i])) {
      a = 0;
    }

    if (/[A-Z]/.test(s[i])) {
      A = 0;
    }

    if (/[0-9]/.test(s[i])) {
      d = 0;
    }

    let j = i;

    while (i < s.length && s[i] == s[j]) {
      i++;
    }

    arr[j] = i - j;
  }

  const total = a + A + d;

  if (arr.length < 6) {
    res += total + Math.max(0, 6 - arr.length - total);
  } else {
    let over = Math.max(arr.length - 20, 0);
    let left = 0;
    res += over;

    for (let k = 1; k < 3; k++) {
      for (let i = 0; i < arr.length && over > 0; i++) {
        if (arr[i] < 3 || arr[i] % 3 != k - 1) {
          continue;
        }

        arr[i] -= Math.min(over, k);
        over -= k;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3 && over > 0) {
        let temp = arr[i] - 2;
        arr[i] -= over;
        over -= temp;
      }

      if (arr[i] >= 3) {
        left += Math.floor(arr[i] / 3);
      }
    }

    res += Math.max(total, left);
  }

  return res;
};

// time:  O(n)
// space: O(n)

// ''
// 'a'
// 'aaa'
// 'aaaaa'
// 'aaaaaa'
// 'aaabbb'
// 'aaaaaaaa'
// 'abccbaabc'
