/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const arr = s.split('');
  let start = 0, end = arr.length - 1;

  while (start < end) {
    if (/[a-zA-Z]/.test(arr[start]) && /[a-zA-Z]/.test(arr[end])) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    } else if (!/[a-zA-Z]/.test(arr[start])) {
      start++;
    } else {
      end--;
    }
  }

  return arr.join('');  
};

// time:  O(n)
// space: O(n)

// 'ab-cd'
// 'a-bC-dEf-ghIj'
// 'Test1ng-Leet=code-Q!'