/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  if (strs.length < 2) {
    return strs.length;
  }

  function DFS(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == null) {
        continue;
      }

      if (check(str, arr[i])) {
        s = arr[i];
        arr[i] = null;
        DFS(arr, s);
      }
    }
  }

  function check(s, t) {
    let res = 0;
    let i = 0;

    while (res <= 2 && i < s.length) {
      if (s[i] != t[i]) {
        res++;
      }

      i++;
    }

    return res == 2 || res == 0;
  }

  let res = 0;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] == null) {
      continue;
    }

    str = strs[i];
    strs[i] = null;
    res++;
    DFS(strs, str);
  }

  return res;
};

// time:  O(n^2*wordLen)
// space: O(n)

// ['abc', 'abc']
// ['omv', 'ovm']
// ['tars', 'rats', 'arts', 'star']
