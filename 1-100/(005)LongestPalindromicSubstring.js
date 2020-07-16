/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let newS;
  let n = s.length;

  if (n == 0) {
    newS = '^$';
  } else {
    newS = '^'
      
    for (const char of s) {
      newS += '#' + char;
    }   
      
    newS += '#$'; 
  }

  n = newS.length;
  const array = new Array(n);

  let C = 0
  let R = 0;
  for (let i = 1; i < n - 1; i++) {
    let i_mirror = 2 * C - i;

    if (R > i) {
      array[i] = Math.min(R - i, array[i_mirror]);
    } else {
      array[i] = 0; 
    }

    while (newS[i + 1 + array[i]] == newS[i - 1 - array[i]]) {
      array[i]++;
    }

    if (i + array[i] > R) {
      C = i;
      R = i + array[i];
    }
  }

  let maxLen = 0;
  let centerIndex = 0;
  for (let i = 1; i < n - 1; i++) {
    if (array[i] > maxLen) {
      maxLen = array[i];
      centerIndex = i;
    }
  }

  const start = Math.floor((centerIndex - maxLen) / 2);
  return s.substring(start, start + maxLen);
}

// time:  O(n)
// space: O(n)

// test cases:
// ''
// 'a'
// 'ac'
// 'ababc'
// 'bbbbbb'
