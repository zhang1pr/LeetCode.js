/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  let count1 = 0;
  let count2 = 0;
  let i = 0;
  let j = 0;
  
  while (count1 < n1) {
    if (s1[i] == s2[j]) {
      j++;
      if (j == s2.length) {
        j = 0;
        count2++;
      }
    }
    
    i++;
    if (i == s1.length) {
      i = 0;
      count1++;
    }
  }
  
  return count2 / n2;
};

// time:  O(n1*s1Len)
// space: O(1)

// 'a', 1, 'a', 1
// 'ab', 1, 'b', 1
// 'abc', 1, 'bc', 1
// 'abc', 4, 'a', 1
// 'acb', 4, 'ab', 2

