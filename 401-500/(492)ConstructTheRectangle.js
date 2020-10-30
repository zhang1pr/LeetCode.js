/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let width = Math.floor(Math.sqrt(area));

  while (width > 0) {
    if (Number.isInteger(area / width)) {
      return [area / width, width];
    }

    width--;
  }
};

// time:  O(√(n))
// space: O(1)

// 1
// 2
// 3
// 4
// 37
// 122122
