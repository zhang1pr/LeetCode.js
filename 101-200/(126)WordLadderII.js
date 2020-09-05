/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const res = [];

  if (!wordList.includes(endWord)) {
    return res;
  }

  const map = new Map();

  function BFS(beginWord, endWord, wordList, map) {
    set1 = new Set().add(beginWord);
    set2 = new Set().add(endWord);
    wordSet = new Set(wordList);
    traverse(set1, set2, wordSet, true, map);
  }

  function traverse(set1, set2, wordSet, direction, map) {
    if (set1.size == 0) {
      return false;
    }

    if (set1.size > set2.size) {
      return traverse(set2, set1, wordSet, !direction, map);
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

    let done = false;

    const set = new Set();

    let word;
    let key;
    let val;
    let list;

    for (const string of set1.values()) {
      for (let i = 0; i < string.length; i++) {
        for (let charCode = 97; charCode <= 122; charCode++) {
          if (string.charCodeAt(i) == charCode) {
            continue;
          }

          word = string.slice(0, i) + String.fromCharCode(charCode) + string.slice(i + 1);

          key = direction ? string : word;
          val = direction ? word : string;

          list = map.get(key) || [];

          if (set2.has(word)) {
            done = true;
            list.push(val);
            map.set(key, list);
          }

          if (!done && wordSet.has(word)) {
            set.add(word);
            list.push(val);
            map.set(key, list);
          }
        }
      }
    }

    return done || traverse(set2, set, wordSet, !direction, map);
  }

  BFS(beginWord, endWord, wordList, map);

  function findLaddersHelper(beginWord, endWord, map) {
    if (beginWord == endWord) {
      res.push(temp.slice());
      return;
    }

    const neighbors = map.get(beginWord) || [];
    for (const neighbor of neighbors) {
      temp.push(neighbor);
      findLaddersHelper(neighbor, endWord, map);
      temp.pop();
    }
  }

  const temp = [beginWord];
  findLaddersHelper(beginWord, endWord, map);

  return res;
};

// time:  O(b^(d/2))
// space: O(b^(d/2))

// test cases:
// 'hit', 'hog', ['hog']
// 'hit', 'hat', ['hot']
// 'hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']
// 'hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
