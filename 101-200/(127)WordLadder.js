/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let length = 2;

  if (!wordList.includes(endWord)) {
    return 0;
  }

  const set1 = new Set().add(beginWord);
  const set2 = new Set().add(endWord);
  const wordSet = new Set(wordList);

  function BFS(set1, set2, wordSet) {
    if (set1.size == 0) {
      return false;
    }

    if (set1.size > set2.size) {
      return BFS(set2, set1, wordSet);
    }

    for (const value of set1.values()) {
      if (wordSet.has(value)) {
        wordSet.delete(value);
      }
    }

    for (const value of set2.values()) {
      if (wordSet.has(value)) {
        wordSet.delete(value);
      }
    }

    const set = new Set();

    let word;

    for (const string of set1.values()) {
      for (let i = 0; i < string.length; i++) {
        for (let charCode = 97; charCode <= 122; charCode++) {
          if (string.charCodeAt(i) == charCode) {
            continue;
          }

          word = string.slice(0, i) + String.fromCharCode(charCode) + string.slice(i + 1);

          if (set2.has(word)) {
            return true;
          }

          if (wordSet.has(word)) {
            set.add(word);
          }
        }
      }
    }

    if (set.size > 0) {
      length++;
    }

    return BFS(set2, set, wordSet);
  }

  if (!BFS(set1, set2, wordSet)) {
    return 0;
  }

  return length;
}

// time:  O(b^(d/2))
// space: O(b^(d/2))

// test cases:
// 'hit', 'hog', ['hog']
// 'hit', 'hat', ['hot']
// 'hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']
// 'hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
