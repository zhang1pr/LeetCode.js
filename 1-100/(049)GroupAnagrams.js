/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();

  for (const str of strs) {
    const arr = Array(26).fill(0);

    for (const char of str) {
      arr[char.charCodeAt(0) - 97]++;
    }

    const string = arr.join('#');

    if (map.has(string)) {
      map.get(string).push(str);
    } else {
      map.set(string, [str]);
    }
  }

  return [...map.values()];
};

// time:  O(n*maxLen(s))
// space: O(n*maxLen(s))

// ['a']
// ['a', 'aa', 'aaa']
// ['not', 'ton', 'ontz']
// ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
