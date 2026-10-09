/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (desiredTotal <= 0) {
    return true;
  }

  if (((1 + maxChoosableInteger) / 2 * maxChoosableInteger) < desiredTotal) {
    return false;
  }

  const dp = new Map();

  function DFS(maxChoosableInteger, curDesiredTotal, mask) {
    if (dp.has(mask)) {
      return dp.get(mask);
    }

    for (let i = 1; i <= maxChoosableInteger; i++) {
      const bit = 1 << i;
      
      if ((mask & bit) !== 0) {
        continue;
      }

      if (curDesiredTotal - i <= 0 || !DFS(maxChoosableInteger, curDesiredTotal - i, mask | bit)) {
        dp.set(mask, true);
        return true;
      }
    }

    dp.set(mask, false);
    return false;
  }

  return DFS(maxChoosableInteger, desiredTotal, 0);
};

// time:  O(n!)
// space: O(n)

// 1, 0
// 1, 1
// 1, 2
// 10, 0
// 10, 1
// 10, 11
