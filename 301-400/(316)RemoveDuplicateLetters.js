/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const res = new Array(26).fill(0); 
  const visited = new Array(26).fill(false);

  for (const char of s) {
    res[char.charCodeAt(0) - 97]++;
  }

  const stack = [];
  let index;

  for (const char of s) { 
    index = char.charCodeAt(0) - 97;
    res[index]--;
    
    if (visited[index]) {
      continue;
    }

    while (stack.length != 0 && char < stack[stack.length - 1] && res[stack[stack.length - 1].charCodeAt(0) - 97] != 0) {
      visited[stack.pop().charCodeAt(0) - 97] = false;
    }

    stack.push(char);
    visited[index] = true;
  }

  return stack.join('');
};

// time:  O(n)
// space: O(n)

// 'a'
// 'ba'
// 'ab'
// 'aba'
// 'bcab'
// 'bcabc'
// 'cbacdcbc'
