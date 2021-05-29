/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  const waiting = [...Array(26)].map(() => []);
  for (let i = 0; i < words.length; i++) {
    waiting[words[i][0].charCodeAt(0) - 97].push([i, 1]);
  }

  let res = 0;

  for (const ch of s) {
    const advance = waiting[ch.charCodeAt(0) - 97].slice();
    waiting[ch.charCodeAt(0) - 97] = [];

    for (const [wordIndex, charIndex] of advance) {
      if (charIndex < words[wordIndex].length) {
        waiting[words[wordIndex][charIndex].charCodeAt(0) - 97].push([wordIndex, charIndex + 1]);
      } else {
        res++;
      }
    }
  }

  return res;
};

// time:  O(sLen + wordsLen)
// space: O(words)

// 'abcde', ['a', 'bb', 'acd', 'ace']
// 'dsahjpjauf', ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax']
