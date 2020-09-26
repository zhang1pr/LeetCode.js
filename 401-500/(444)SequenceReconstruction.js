/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function(org, seqs) {
  const pairs = {};
  const index = {};

  for (let i = 0; i < org.length; i++) {
    index[org[i]] = i;
  }

  for (let j = 0; j < seqs.length; j++) {
    const s = seqs[j];

    for (let i = 0; i < s.length; i++) {
      if (index[s[i]] == null) {
        return false;
      }

      if (i > 0 && index[s[i - 1]] >= index[s[i]]) {
        return false;
      }

      pairs[s[i - 1].toString() + ',' + s[i].toString()] = 1;
    }
  }

  for (let i = 0; i < org.length; i++) {
    if (pairs[org[i - 1].toString() + ',' + org[i].toString()] == null) {
      return false;
    }
  }

  return true;
};

// time:  O(sArrayLen*sLen+n)
// space: O(sArrayLen*sLen)

// [1, 2, 3], [[1, 2]]
// [1, 2, 3], [[1, 2], [1, 3]]
// [1, 2, 3], [[1, 2], [1, 3], [2, 3]]
// [4, 1, 5, 2, 6, 3], [[5, 2, 6, 3], [4, 1, 5, 2]]
