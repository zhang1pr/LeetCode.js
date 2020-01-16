/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }

  let index = 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] == needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i+j] != needle[j]) {
          break;
        }

        if (j == needle.length - 1) {
          return index;
        }
      }
    }

    index++;
  }

  return -1;
};

// time:  O(n)
// space: O(1)

// test cases:
// '', ''
// 'a', ''
// '', 'a'
// 'ab', 'c'
// 'hello', 'll'
