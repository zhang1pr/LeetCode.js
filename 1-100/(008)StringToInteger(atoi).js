/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const lowerBound = -2 ** 31;
  const upperBound = -lowerBound - 1;

  let int = parseInt(str, 10);

  int = !int
    ? 0 : int < lowerBound
      ? lowerBound : int > upperBound
        ? upperBound : int;

  return int || 0;
};

// time:  O(n)
// space: O(1)

// '42'
// '    -42'
// '4193 with words'
// '-91283472332'
