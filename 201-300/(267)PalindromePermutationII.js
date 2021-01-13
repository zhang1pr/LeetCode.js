/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const res = [];
  const arr = Array(256).fill(0);

  let odds = 0;

  for (const c of s) {
    arr[c.charCodeAt(0)]++;
  }

  for (const c of arr) {
    if (c % 2 != 0) {
      odds++;
    }
  }

  if (odds <= 1) {
    let center;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 1) {
        center = String.fromCharCode(i);
        arr[i]--;
        break;
      }
    }

    generate(res, arr, center || '', s.length);
  }

  return res;
}

var generate = function(res, arr, build, len) {
  if (build.length == len) {
    res.push(build);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] -= 2;
      const target = String.fromCharCode(i);
      generate(res, arr, target + build + target, len);
      arr[i] += 2;
    }
  }
};

// time:  O((n/2)!)
// space: O(n)

// ''
// 'a'
// 'aab'
// 'abc'
// 'aabb'
// 'code'
// 'carerac'
