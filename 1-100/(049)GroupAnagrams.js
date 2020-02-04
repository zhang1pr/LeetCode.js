/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  strs = strs.sort();
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const string = strs[i];
    const sortedString = string.split('').sort().join('');

    if (!map.has(sortedString)) {
      map.set(sortedString, [string]);
    } else {
      const array = map.get(sortedString);
      array.push(string);
      map.set(sortedString, array);
    }
  }

  return [...map.values()];
};

// time:  O(mn)
// space: O(mn)

// test cases:
// ['a']
// ['a', 'aa', 'aaa']
// ['not', 'ton', 'ontz']
// ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
