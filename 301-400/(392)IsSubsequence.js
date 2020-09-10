/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const map = new Map();

  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (!map.has(c)) {
      map.set(c, []);
    }

    map.get(c).push(i);
  }

  let prev = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!map.has(c)) {
      return false;
    }

    const list = map.get(c);
    let start = 0;
    let end = list.length - 1;
    let mid;

    while (start <= end) {
      mid = (start + end) >>> 1;

      if (list[mid] < prev) {
        start = mid + 1;
      } else if (list[mid] > prev) {
        end = mid - 1;
      } else {
        start = mid;
        break;
      }
    }

    if (start == list.length) {
      return false;
    }

    prev = list[start] + 1;
  }

  return true;
}

// time:  O(mlog(n)+n)
// space: O(n)

// 'a', 'a'
// 'ab', 'a'
// 'aa', 'aba'
// 'abc', 'ahbgdc'
// 'axc', 'ahbgdc'
