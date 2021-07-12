/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  const arr = Array(10).fill(0);

  for (const c of s) {
    if (c == 'z') {
      arr[0]++;
    }

    if (c == 'w') {
      arr[2]++;
    }

    if (c == 'x') {
      arr[6]++;
    }

    if (c == 's') {
      arr[7]++;
    }

    if (c == 'g') {
      arr[8]++;
    }

    if (c == 'u') {
      arr[4]++;
    }

    if (c == 'f') {
      arr[5]++;
    }

    if (c == 'h') {
      arr[3]++;
    }

    if (c == 'i') {
      arr[9]++;
    }

    if (c == 'o') {
      arr[1]++;
    }
  }

  arr[7] -= arr[6];
  arr[5] -= arr[4];
  arr[3] -= arr[8];
  arr[9] = arr[9] - arr[8] - arr[5] - arr[6];
  arr[1] = arr[1] - arr[0] - arr[2] - arr[4];

  let res = '';
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < arr[i]; j++) {
      res += i.toString();
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// 'fviefuro'
// 'owoztneoer'
