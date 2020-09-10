/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  let count = 0;
  for (const c of data) {
    if (count == 0) {
      if ((c >> 5) == 0b110) {
        count = 1;
      } else if ((c >> 4) == 0b1110) {
        count = 2;
      } else if ((c >> 3) == 0b11110) {
        count = 3;
      } else if ((c >> 7)) {
        return false;
      }
    } else {
      if ((c >> 6) != 0b10) {
        return false;
      }

      count--;
    }
  }

  return count == 0;
};

// time:  O(n)
// space: O(1)

// [1]
// [130]
// [197]
// [197, 130, 1]
// [235, 140, 4]
