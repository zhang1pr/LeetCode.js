/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  return s.length == goal.length && (s + s).includes(goal);
};

// time:  O(n^2)
// space: O(n)

// 'abcde', 'abcde'
// 'abcde', 'abced'
// 'abcde', 'cdeab'
