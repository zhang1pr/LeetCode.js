/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  let res = '';
  const set = new Set(words);

  for (const word of words) {
    if (word.length > res.length || word.length == res.length && word > res) {
      let flag = true;
      for (let i = 1; i < word.length; i++) {
        if (!set.has(word.slice(0, i))) {
          flag = false;
          break;
        }
      }

      if (flag) {
        res = word;
      }
    }
  }

  return res;
};

// time:  O(n*wordLen)
// space: O(n)

// ['a']
// ['a', 'b']
// ['a', 'b', 'aa', 'ab', 'bbb']
// ['w', 'wo', 'wor', 'worl', 'world']
// ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']
