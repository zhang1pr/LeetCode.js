/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, str) {
  const map = new Map();
  const set = new Set();

  function isMatch(str, i, pat, j) {
    if (i == str.length && j == pat.length) {
      return true;
    }
    
    if (i == str.length || j == pat.length) {
      return false;
    }

    const c = pat[j];
    const s = map.get(c);
    if (s) {
      if (!str.startsWith(s, i)) {
        return false;
      }

      return isMatch(str, i + s.length, pat, j + 1);
    }
    
    for (let k = i; k < str.length; k++) {
      const p = str.slice(i, k + 1);
      if (set.has(p)) {
        continue;
      }

      map.set(c, p);
      set.add(p);
      
      if (isMatch(str, k + 1, pat, j + 1)) {
        return true;
      }

      map.delete(c);
      set.delete(p);
    }

    return false;
  }

  return isMatch(str, 0, pattern, 0);
};

// time:  O(n!)
// space: O(n)

// 'aabb', 'asdasdasdasd'
// 'abab', 'xyzabcxzyabc'
// 'aaaa', 'redblueredblue'
