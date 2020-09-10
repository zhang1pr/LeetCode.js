/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  if (rectangles.length == 0 || rectangles[0].length == 0) {
    return false;
  }

  let x1 = Infinity;
  let x2 = -Infinity;
  let y1 = Infinity;
  let y2 = -Infinity;

  const set = new Set();
  let area = 0;

  for (const rect of rectangles) {
    x1 = Math.min(rect[0], x1);
    y1 = Math.min(rect[1], y1);
    x2 = Math.max(rect[2], x2);
    y2 = Math.max(rect[3], y2);

    area += (rect[2] - rect[0]) * (rect[3] - rect[1]);

    const s1 = rect[0] + ',' + rect[1];
    const s2 = rect[0] + ',' + rect[3];
    const s3 = rect[2] + ',' + rect[3];
    const s4 = rect[2] + ',' + rect[1];

    if (set.has(s1)) {
      set.delete(s1);
    } else {
      set.add(s1)
    }

    if (set.has(s2)) {
      set.delete(s2);
    } else {
      set.add(s2);
    }

    if (set.has(s3)) {
      set.delete(s3);
    } else {
      set.add(s3);
    }

    if (set.has(s4)) {
      set.delete(s4);
    } else {
      set.add(s4);
    }
  }

  if (
    !set.has(x1 + ',' + y1)
    || !set.has(x1 + ',' + y2)
    || !set.has(x2 + ',' + y1)
    || !set.has(x2 + ',' + y2)
    || set.size != 4
  ) {
    return false;
  }

  return area == (x2 - x1) * (y2 - y1);
};

// time:  O(n)
// space: O(n)

// [[1, 1, 2, 3], [1, 3, 2, 4], [3, 1, 4, 2], [3, 2, 4, 4]]
// [[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [2, 2, 4, 4]]
// [[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [3, 2, 4, 4]]
// [[1, 1, 3, 3], [3, 1, 4, 2], [3, 2, 4, 4], [1, 3, 2, 4], [2, 3, 3, 4]]
