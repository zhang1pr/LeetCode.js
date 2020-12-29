/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const points = [p1, p2, p3, p4];

  if (new Set([p1.join(','), p2.join(','), p3.join(','), p4.join(',')]).size != 4) {
    return false;
  }

  const combos = [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]];
  const dists = new Set();

  for (const combo of combos) {
    dists.add(getDist(points[combo[0]], points[combo[1]]));
    dists.add(getDist(points[combo[1]], points[combo[2]]));
    dists.add(getDist(points[combo[0]], points[combo[2]]));
  }

  return dists.size == 2;
};

function getDist(a, b) {
  return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
};

// time:  O(1)
// space: O(1)

// [0, 0], [1, 1], [1, 0], [0, 1]
// [0, 0], [1, 1], [1, 0], [0, 12]
// [1, 0], [-1, 0], [0, 1], [0, -1]
