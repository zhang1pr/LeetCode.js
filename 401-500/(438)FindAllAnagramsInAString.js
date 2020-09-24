/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const res = [];
  const sLen = s.length;
  const pLen = p.length;

  if (pLen > sLen) {
    return res;
  }

  const map = new Map();

  for (const char of p) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let size = map.size;

  for (let i = 0; i < p.length; i++) {
    if (map.has(s[i])) {
      const get = map.get(s[i]);
      map.set(s[i], get - 1);

      if (get == 1) {
        size--;
      }
    }
  }

  if (size == 0) {
    res.push(0);
  }

  for (let i = 0; i < s.length - p.length; i++) {
    if (map.has(s[i])) {
      const get = map.get(s[i]);
      map.set(s[i], get + 1);

      if (get == 0) {
        size++;
      }
    }

    if (map.has(s[i + pLen])) {
      const get = map.get(s[i + pLen]);
      map.set(s[i + pLen], get - 1);

      if (get == 1) {
        size--;
      }
    }

    if (size == 0) {
      res.push(i + 1);
    }
  }

  return res;
};

// time:  O(sLen-pLen)
// space: O(pLen)

// 'a', 'a'
// 'a', 'b'
// 'a', 'aa'
// 'ba', 'ab'
// 'abab', 'ab'
// 'cbaebabacd', 'abc'
