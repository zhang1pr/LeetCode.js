/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  const regex = /\w/;
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (!regex.test(s[i])) {
      i++;

      if (i == s.length) {
        return true;
      }
    }

    while (!regex.test(s[j])) {
      j--;
    }

    if (s[i] != s[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

// time:  O(n)
// space: O(1)

// test cases:
// ''
// ' '
// ';'
// 'a=A'
// 'race a car'
// 'A man, a plan, a canal: Panama'
