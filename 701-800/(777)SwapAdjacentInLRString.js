/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
  const n = start.length;
  let s1 = '';
  let s2 = '';

  for (let i = 0; i < n; i++) {
    if (start[i] != 'X') {
      s1 += start[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (end[i] != 'X') {
      s2 += end[i];
    }
  }

  if (s1 != s2) {
    return false;
  }

  let i = 0;
  let j = 0;
  while (i < n && j < n) {
    if (start[i] == 'X') {
      i++;
    } else if (end[j] == 'X') {
      j++;
    } else {
      if (start[i] == 'L' && i < j || start[i] == 'R' && i > j) {
        return false;
      }

      i++;
      j++;
    }
  }

  return true;
};

// time:  O(n)
// space: O(n)

// 'X', 'L'
// 'XL', 'LX'
// 'LLR', 'RRL'
// 'XLLR', 'LXLX
// 'RXXLRXRXL', 'XRLXXRRLX'
