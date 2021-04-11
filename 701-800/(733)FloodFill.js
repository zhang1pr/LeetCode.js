/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const set = new Set();
  const oldVal = image[sr][sc];
  let queue = [[sr, sc]];
  let str;

  while (queue.length != 0) {
    const newQueue = [];

    for (const [x, y] of queue) {
      str = x.toString() + ',' + y.toString();

      if (x < 0 || y < 0 || x >= image.length || y >= image[0].length || image[x][y] != oldVal || set.has(str)) {
        continue;
      }

      set.add(str);
      image[x][y] = newColor;

      newQueue.push([x - 1, y]);
      newQueue.push([x + 1, y]);
      newQueue.push([x, y - 1]);
      newQueue.push([x, y + 1]);
    }

    queue = newQueue;
  }

  return image;
};

// time:  O(n)
// space: O(n)

// [[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2
