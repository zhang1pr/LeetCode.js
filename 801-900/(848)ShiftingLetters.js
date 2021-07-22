/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const S = [...s];

  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] = (shifts[i] + shifts[i + 1]) % 26;
  }

  for (let i = 0; i < shifts.length; i++) {
    S[i] = String.fromCharCode((S[i].charCodeAt(0) - 97 + shifts[i]) % 26 + 97);
  }

  return S.join('');
};

// time:  O(n)
// space: O(n)

// 'aaa', [1, 2, 3]
// 'abc', [3, 5, 9]
