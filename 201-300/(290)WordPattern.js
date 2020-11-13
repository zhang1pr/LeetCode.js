/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const arr1 = str.split(' ');
  if (arr1.length != pattern.length) {
    return false;
  }

  const arr2 = pattern.split('');

  return DFS(arr1, arr2) && DFS(arr2, arr1);
};

var DFS = function(arr1, arr2) {
  const map = new Map();

  for (let i = 0; i < arr1.length; i++) {
    const key = arr1[i];
    if (map.has(key)) {
      if (map.get(key) != arr2[i]) {
        return false;
      }
    } else {
      map.set(key, arr2[i]);
    }
  }

  return true;
}

// time:  O(n)
// space: O(n)

// 'aaaa', 'dog cat cat dog'
// 'abba', 'dog cat cat dog'
// 'abba', 'dog dog dog dog'
// 'abba', 'dog cat cat fish'
