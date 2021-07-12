/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  const target = licensePlate.toLowerCase();
  const arr = Array(26).fill(0);

  for (const ch of target) {
    if (ch >= 'a' && ch <= 'z') {
      arr[ch.charCodeAt(0) - 97]++;
    }
  }

  let min = Infinity;
  let res;
  for (const word of words) {
    const w = word.toLowerCase();

    if (matches(w, arr) && w.length < min) {
      min = w.length;
      res = word;
    }
  }

  return res;
};

var matches = function(word, arr) {
  const targetArr = Array(26).fill(0);

  for (const ch of word) {
    if (ch >= 'a' && ch <= 'z') {
      targetArr[ch.charCodeAt(0) - 97]++;
    }
  }

  for (let i = 0; i < 26; i++) {
    if (targetArr[i] < arr[i]) {
      return false;
    }
  }

  return true;
}

// time:  O(m+n*wordLen)
// space: O(1)

// '1s3 456', ['looks', 'pest', 'stew', 'show']
// '1s3 PSt', ['step', 'steps', 'stripe', 'stepple']
// 'OgEu755', ['enough', 'these', 'play', 'wide', 'wonder', 'box', 'arrive', 'money', 'tax', 'thus']
// 'Ah71752', ['suggest', 'letter', 'of', 'husband', 'easy', 'education', 'drug', 'prevent', 'writer', 'old']
// 'iMSlpe4', ['claim', 'consumer', 'student', 'camera', 'public', 'never', 'wonder', 'simple', 'thought', 'use']
