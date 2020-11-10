/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 1;
      let right = n;
      let mid;
      while (left <= right) {
        mid = (left + right) >>> 1;

        if (isBadVersion(mid)) {
          if (mid > 1 && !isBadVersion(mid - 1) || mid == 1) {
            return mid;
          } else {
            right = mid - 1;
          }
        } else {
          left = mid + 1;
        }
      }

      return -1;
  };
};

// time:  O(log(n))
// space: O(1)

// 1, 1
// 2, 1
// 5, 4
