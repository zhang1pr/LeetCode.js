/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
  reverse(s, 0, s.length - 1);
  let last = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] == ' ' || i == s.length) {
      reverse(s, last, i - 1);
      last = i + 1;
    }
  }
};

var reverse = function(s, start, end) {
  let temp;

  while (start < end) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
};

// time:  O(n)
// space: O(1)

// ['a']
// ['a', ' ', 'b']
// ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
// ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
// ['a', ' ', 'g', 'o', 'o', 'd', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e']
