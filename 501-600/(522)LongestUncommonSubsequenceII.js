/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  strs.sort((a, b) => b.length - a.length);

  const duplicates = getDuplicates(strs);

  for (let i = 0; i < strs.length; i++) {
    if (!duplicates.has(strs[i])) {
      if (i == 0) {
        return strs[0].length;
      }

      for (let j = 0; j < i; j++) {
        if (isSubsequence(strs[j], strs[i])) {
          break;
        }

        if (j == i - 1) {
          return strs[i].length;
        }
      }
    }
  }

  return -1;
};

var isSubsequence = function(a, b) {
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] == b[j]) {
      j++;
    }

    i++;
  }

  return j == b.length;
};

var getDuplicates = function(strs) {
  const set = new Set();
  const duplicates = new Set();

  for (const s of strs) {
    if (set.has(s)) {
      duplicates.add(s);
    }

    set.add(s);
  }

  return duplicates;
};

// time:  O(n^2*sLen)
// space: O(n)

// ['a', 'a', 'a']
// ['a', 'aa', 'aaa']
// ['a', 'ab', 'abc']
// ['aba', 'cdc', 'eae']
