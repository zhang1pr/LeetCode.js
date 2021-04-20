/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    let eof = false;
    let total = 0;
    let temp = Array(4);

    while (!eof && total < n) {
      let cnt = read4(temp);

      if (cnt < 4) {
        eof = true;
      }

      cnt = Math.min(cnt, n - total);

      for (let i = 0; i < cnt; i++) {
        buf[total] = temp[i];
        total++;
      }
    }

    return total;
  };
};

// time:  O(n)
// space: O(1)

// '', 0
// '', 1
// 'a', 1
// 'abc', 4
// 'abcd', 4
// 'abcde', 5
// 'leetcode', 5
// 'abcdABCD1234', 12
