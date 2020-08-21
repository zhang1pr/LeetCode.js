/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  s = s.split('');
  
  let l = 0, r = s.length - 1;
  
  while(l < r) {
    if (vowels.has(s[l]) && vowels.has(s[r])) {
      [s[l], s[r]] = [s[r], s[l]];
      l++, r--;
    } else if(!vowels.has(s[l])) {
      l++;
    } else if(!vowels.has(s[r])) {
      r--;
    }
  }
  
  return s.join('');
};

// time:  O(n)
// space: O(n)

// 'hello'
// 'leetcode'
