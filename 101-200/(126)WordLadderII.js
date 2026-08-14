/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const res = [];
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return res;
  }

  const parents = new Map();

  let level = new Set([beginWord]);
  wordSet.delete(beginWord);
  let found = false;

  while (level.size > 0 && !found) {
    const nextLevel = new Set();

    for (const word of level) {
      wordSet.delete(word);
    }

    for (const word of level) {
      for (let i = 0; i < word.length; i++) {
        for (let code = 97; code <= 122; code++) {
          const char = String.fromCharCode(code);

          if (char === word[i]) {
            continue;
          }

          const nextWord = word.slice(0, i) + char + word.slice(i + 1);

          if (!wordSet.has(nextWord)) {
            continue;
          }

          if (!parents.has(nextWord)) {
            parents.set(nextWord, new Set());
          }

          parents.get(nextWord).add(word);

          if (nextWord == endWord) {
            found = true;
          }

          nextLevel.add(nextWord);
        }
      }
    }

    level = nextLevel;
  }

  if (!found) {
    return res;
  }

  const path = [endWord];

  function DFS(word) {
    if (word == beginWord) {
      res.push(path.slice().reverse());
      return;
    }

    for (const parent of parents.get(word) || []) {
      path.push(parent);
      DFS(parent);
      path.pop();
    }
  }

  DFS(endWord);

  return res;
};

// time:  O(v+e)
// space: O(v+e)

// 'hit', 'hog', ['hog']
// 'hit', 'hat', ['hot']
// 'hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']
// 'hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']