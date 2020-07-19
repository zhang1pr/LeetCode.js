/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const array1 = str.split(' ');
  if (array1.length != pattern.length) {
    return false;
  }

  const array2 = pattern.split('');

  return wordPatternHelper(array1, array2) && wordPatternHelper(array2, array1);
};

var wordPatternHelper = function(array1, array2) {
  const map = new Map(); 
  
  for (let i = 0; i < array1.length; i++) {
    const key = array1[i];
    if (map.has(key)) {
      if (map.get(key) != array2[i]) {
        return false;
      }
    } else {
      map.set(key, array2[i]);
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
