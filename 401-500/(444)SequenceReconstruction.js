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

  for (const seq of seqs) {
    for (let i = 1; i < seq.length; i++) {
      if (index[seq[i]] == null) {
        return false;
      }

      if (index[seq[i - 1]] >= index[seq[i]]) {
        return false;
      }
      
      pairs[seq[i - 1].toString() + ',' + seq[i].toString()] = 1;
    }
  }

  for (let i = 1; i < org.length; i++) {
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
