/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  if (s == '') {
    return [];
  }

  let queue = [''];

  for (const ch of s) {
    const newQueue = [];

    for (const str of queue) {
      if ('0' <= ch && ch <= '9') {
        newQueue.push(str + ch);
      } else {
        newQueue.push(str + ch.toLowerCase());
        newQueue.push(str + ch.toUpperCase());
      }
    }

    queue = newQueue;
  }

  return queue;
};

// time:  O(2^n)
// space: O(2^n)

// '3z4'
// 'a1b2'
// '12345'
