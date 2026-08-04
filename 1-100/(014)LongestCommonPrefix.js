/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return '';
  }

  const target = strs[0];
  let i = 0;
  
  for (; i < target.length; i++) {
    let flag = false;
    for (const str of strs) {
      if (str[i] != target[i]) {
        flag = true;
        break;
      }
    }

    if (flag) break;
  }

  return target.slice(0, i);
};

// time:  O(mn)
// space: O(1)

// []
// ['']
// ['dog', 'racecar', 'car']
// ['flower', 'flow', 'flight']
