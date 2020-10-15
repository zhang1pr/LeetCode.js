/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  const res = [];
  const set = new Set();

  words.sort((a, b) => a.length - b.length);

  function canForm(word) {
    if (set.size == 0) {
      return false;
    }

    const dp = new Array(word.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= word.length; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && set.has(word.slice(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }

    return dp[word.length];
  };

  for (const word of words) {
    if (canForm(word)) {
      res.push(word);
    }

    set.add(word);
  }

  return res;
};

// time:  O(n*wordLen^3)
// space: O(n+wordLen)

// ['cat', 'cats', 'catsdogcats', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcatdogcat']
