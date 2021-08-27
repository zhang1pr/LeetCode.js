/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
  const count = new Map();

  for (const word of s1.split(' ')) {
    count.set(word, (count.get(word) || 0) + 1);
  }

  for (const word of s2.split(' ')) {
    count.set(word, (count.get(word) || 0) + 1);
  }

  const res = [];

  for (const [word, times] of count) {
    if (times == 1) {
      res.push(word);
    }
  }

  return res;
};

// time:  O(m+n)
// space: O(m+n)

// 'apple apple', 'banana'
// 'this apple is sweet', 'this apple is sour'
