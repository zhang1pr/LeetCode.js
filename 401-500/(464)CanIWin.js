/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (desiredTotal <= maxChoosableInteger) {
    return true;
  }

  if (((1 + maxChoosableInteger) / 2 * maxChoosableInteger) < desiredTotal) {
    return false;
  }

  const dp = new Map();
  const array = Array(maxChoosableInteger + 1).fill(false);

  function DFS(maxChoosableInteger, curDesiredTotal) {
    if (curDesiredTotal <= 0) {
      return false;
    }

    const string = array.toString();
    if (dp.has(string)) {
      return dp.get(string);
    }

    for (let i = 1; i <= maxChoosableInteger; i++) {
      if (array[i]) {
        continue;
      }

      array[i] = true;

      if (!DFS(maxChoosableInteger, curDesiredTotal - i)) {
        dp.set(string, true);
        array[i] = false;
        return true;
      }

      array[i] = false;
    }

    dp.set(string, false);
    return false;
  }

  return DFS(maxChoosableInteger, desiredTotal);
};

// time:  O(n!)
// space: O(n)

// 1, 0
// 1, 1
// 1, 2
// 10, 0
// 10, 1
// 10, 11
