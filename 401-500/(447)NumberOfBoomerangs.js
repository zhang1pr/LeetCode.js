/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let res = 0;

  for (let i = 0; i < points.length; i++) {
    const map = new Map();

    for (let j = 0; j < points.length; j++) {
      if (i == j) continue;

      const dx = points[i][0] - points[j][0];
      const dy = points[i][1] - points[j][1];
      const dist = dx * dx + dy * dy;

      if (map.has(dist)) {
        res += map.get(dist) * 2;
      }

      map.set(dist, (map.has(dist) || 0) + 1);
    }
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// [[0, 0], [1, 0], [2, 0]]
// [[0, 0], [1, 1], [2, 0]]
// [[0, 0], [1, 0], [1, 1], [2, 0]]
