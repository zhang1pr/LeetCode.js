/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const map = new Map();
  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  const res = [...map.keys()];

  res.sort((a, b) => map.get(a) != map.get(b) ? map.get(b) - map.get(a) : a <= b ? -1 : 1);

  console.log(res)
  return res.slice(0, k);
};

// time:  O(nlog(n))
// space: O(n)

// ['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2
// ['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3
