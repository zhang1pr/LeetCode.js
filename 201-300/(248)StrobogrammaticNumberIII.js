/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
  const pairs = [['0', '0'], ['1', '1'], ['6', '9'], ['8', '8'], ['9', '6']];
  
  let count = 0;
  
  function DFS(left, right, current) {
    if (left > right) {
      const s = current.join('');
      
      if ((s.length === low.length && Number(s) < Number(low)) || (s.length === high.length && Number(s) > Number(high))) {
        return;
      }

      count++;
      return;
    }

    for (const [p1, p2] of pairs) {
      current[left] = p1;
      current[right] = p2;
      
      if (left === right && p1 !== p2) {
        continue;
      }

      if (current.length !== 1 && current[0] === '0') {
        continue;
      }

      DFS(left + 1, right - 1, current);
    }
  }
  
  for (let i = low.length; i <= high.length; i++) {
    DFS(0, i - 1, new Array(i).fill(''));
  }

  return count;
}

// time:  O(n^2)
// space: O(n)

// '0', '0'
// '0', '8'
// '0', '100'
// '50', '100'
// '100', '1001'
