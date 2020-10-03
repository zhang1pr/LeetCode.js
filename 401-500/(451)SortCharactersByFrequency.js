/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = new Map();
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  const bucket = new Array(s.length + 1).fill(0);
  for (const [key, frequency] of map.entries()) {
    if (!bucket[frequency]) {
      bucket[frequency] = [];
    }

    bucket[frequency].push(key);
  }

  let res = '';
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      for (const char of bucket[i]) {
        res += char.repeat(i);
      }
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 'a'
// 'tree'
// 'Aabb'
// 'cccaaa'
