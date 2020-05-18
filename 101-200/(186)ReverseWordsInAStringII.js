/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {  
  reverse(str, 0, str.length - 1);
  let last = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] == ' ' || i == str.length) {
      reverse(str, last, i - 1);
      last = i + 1;
    }
  }
};

var reverse = function(str, start, end) {
  let temp;
    
  while (start < end) {
    temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }    
};

// time:  O(n)
// space: O(1)

// test cases:
// ['a']
// ['a', ' ', 'b']
// ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
// ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
// ['a', ' ', 'g', 'o', 'o', 'd', ' ', 'e', 'x', 'a', 'm', 'p', 'l', 'e']
