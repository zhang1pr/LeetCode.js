/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const set1 = new Set('QWERTYUIOPqwertyuiop');
  const set2 = new Set('ASDFGHJKLasdfghjkl');
  const set3 = new Set('ZXCVBNMzxcvbnm');
  const sets = [set1, set2, set3];

  const res = [];

  for (const word of words) {
    const char = word[0];

    let curSet;
    for (const set of sets) {
      if (set.has(char)) {
        curSet = set;
        break;
      }
    }

    let flag = true;
    for (let i = 1; i < word.length; i++) {
      if (!curSet.has(word[i])) {
        flag = false;
        break;
      }
    }

    if (flag) {
      res.push(word);
    }
  }

  return res;
};

// time:  O(n*wordLen)
// space: O(1)

// ['A']
// ['Apple']
// ['Hello', 'Alaska', 'Dad', 'Peace']
