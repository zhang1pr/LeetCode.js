/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
  /**
  * @param {integer} n Total people
  * @return {integer} The celebrity
  */
  return function(n) {
    let celebrity = 0;

    for (let i = 0; i < n; i++) {
      if (knows(celebrity, i)) {
        celebrity = i;
      }
    }

    for (let i = 0; i < n; i++) {
      if (i == celebrity) {
        continue;
      }

      if (knows(celebrity, i) || !knows(i, celebrity)) {
        return -1;
      }
    }

    return celebrity;
  };
};

// time:  O(n)
// space: O(1)

// [[1, 1, 0], [0, 1, 0], [1, 1, 1]]
// [[1, 0, 1], [1, 1, 0], [0, 1, 1]]
