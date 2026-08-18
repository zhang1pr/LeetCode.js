/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function(org, seqs) {
  const pairs = new Set();
  const index = new Map();

  for (let i = 0; i < org.length; i++) {
    index.set(org[i], i);
  }

  for (const seq of seqs) {
    for (let i = 1; i < seq.length; i++) {
      if (index.get(seq[i - 1]) >= index.get(seq[i])) {
        return false;
      }
      
      pairs.add(seq[i - 1].toString() + ',' + seq[i].toString());
    }
  }

  for (let i = 1; i < org.length; i++) {
    if (!pairs.has(org[i - 1].toString() + ',' + org[i].toString())) {
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
