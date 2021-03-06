/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sLen = s.length;
  const tLen = t.length;

  if (sLen != tLen) {
    return false;
  }

  const arr = Array(26).fill(0);

  for (let i = 0; i < sLen; i++) {
    arr[s[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < tLen; i++) {
    arr[t[i].charCodeAt(0) - 97]--;
  }

  return arr.every(item => item == 0);
};

// time:  O(n)
// space: O(1)

// 'a', 'a'
// 'a', 'b'
// 'aa', 'a'
// 'aa', 'aa'
// 'rat, 'car'
// 'anagram', 'nagaram'
