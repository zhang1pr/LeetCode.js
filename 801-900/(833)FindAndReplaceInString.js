/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
  const arr = [];

  for (let i = 0 ; i < indices.length; i++) {
    arr.push([indices[i], i]);
  }

  arr.sort((a, b) => b[0] - a[0]);

  for (const [i, j] of arr) {
    const src = sources[j];
    const tgt = targets[j];

    if (s.substr(i, src.length) == src) {
      s = s.slice(0, i) + tgt + s.slice(i + src.length);
    }
  }

  return s;
};

// time:  O(n+klogk+k*wordLen)
// space: O(n+k*wordLen)

// 'abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff']
// 'abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff']
