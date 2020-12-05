/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  return s.indexOf('A') == s.lastIndexOf('A') && !s.includes('LLL');
};

// time:  O(n)
// space: O(1)

// "P"
// 'A'
// 'L'
// 'ALL'
// 'PLLL'
// 'AALLL'
// "PPALLP"
// "PPALLL"
