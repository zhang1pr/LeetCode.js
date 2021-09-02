/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
  function match(word, pattern) {
    const map = new Map();

    for (let i = 0; i < word.length; i++) {
      const w = word[i];
      const p = pattern[i];

      if (!map.has(w)) {
        map.set(w, p);
      }

      if (map.get(w) != p) {
        return false;
      }
    }

    const seen = Array(26).fill(false);
    for (const p of map.values()) {
      const index = p.charCodeAt(0) - 97;
      if (seen[index]) {
        return false;
      }

      seen[index] = true;
    }

    return true;
  }

  const ans = [];
  for (const word of words) {
    if (match(word, pattern)) {
      ans.push(word);
    }
  }

  return ans;
};

// time:  O(n*wordLen)
// space: O(n*wordLen)

// ['a', 'b', 'c'], 'a'
// ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb'
