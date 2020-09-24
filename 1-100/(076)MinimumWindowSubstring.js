/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = new Map();

  for (const char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let size = map.size;

  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      arr.push([s[i], i]);
    }
  }

  let left = 0;
  let right = 0;
  let leftCur;
  let rightCur;
  let leftRes = 0;
  let rightRes = s.length;

  while (right <= arr.length) {
    if (size == 0) {
      const [char, index] = arr[left];
      leftCur = index;
      const get = map.get(char);
      map.set(char, get +1);

      if (get == 0) {
        size++;
      }

      if (rightRes - leftRes > rightCur - leftCur) {
        rightRes = rightCur;
        leftRes = leftCur;
      }

      left++;
    } else {
      if (right == arr.length) {
        break;
      }

      const [char, index] = arr[right];
      rightCur = index;
      const get = map.get(char);
      map.set(char, get - 1);

      if (get == 1) {
        size--;
      }

      right++;
    }
  }

  return rightRes == s.length ? '' : s.slice(leftRes, rightRes + 1);
};

// time:  O(m+n)
// space: O(m+n)

// 'A', 'A'
// 'AAA', 'A'
// 'ABC', 'ABC'
// 'BCBBBCB', 'BBCC'
// 'ADOBECODEBANC', 'ABC'
