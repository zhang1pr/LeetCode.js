/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  const buffer = [];
  let count = 0;
  let index = 0;

  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    let numCharRead = 0;

    while (numCharRead < n) {
      if (index == 0) {
        count = read4(buffer);
      }

      while (index < count && numCharRead < n) {
        buf[numCharRead] = buffer[index];
        numCharRead++;
        index++;
      }

      if (index == count) {
        index = 0;
      }

      if (count < 4) {
        break;
      }
    }

    return numCharRead;
  };
};

// time:  O(n)
// space: O(n)

// '', [0]
// '', [1, 1]
// 'a', [1, 1]
// 'abc', [4, 1]
// 'abc', [1, 2, 1]
// 'abcd', [1, 2, 1]
// 'abcde', [1, 2, 1]
