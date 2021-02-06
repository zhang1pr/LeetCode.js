/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const map = new Map([['R', 0], ['L', 0], ['U', 0], ['D', 0]]);

  for (const move of moves) {
    map.set(move, map.get(move) + 1);
  }

  return map.get('R') == map.get('L') && map.get('U') == map.get('D');
};

// time:  O(n)
// space: O(1)

// 'UD'
// 'LL'
// 'RRDD'
// 'LDRRLRUULR'
