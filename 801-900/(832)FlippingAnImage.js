/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  const C = image[0].length;

  for (const row of image) {
    for (let i = 0; i < Math.floor((C + 1) / 2); i++) {
      const tmp = row[i] ^ 1;
      row[i] = row[C - 1 - i] ^ 1;
      row[C - 1 - i] = tmp;
    }
  }

  return image;
};

// time:  O(n^2)
// space: O(1)

// [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
// [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
