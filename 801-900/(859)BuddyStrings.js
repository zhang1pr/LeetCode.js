/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length != B.length) {
    return false;
  }

  if (A == B) {
    const set = new Set(A);

    return set.size < A.length;
  }

  const arr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] != B[i]) {
      arr.push(i);
    }
  }

  return arr.length == 2 && A[arr[0]] == B[arr[1]] && A[arr[1]] == B[arr[0]];
};

// time:  O(n)
// space: O(n)

// 'ab', 'ba'
// 'ab', 'ab'
// 'aa', 'aa'
// 'aaaaaaabc', 'aaaaaaacb'
