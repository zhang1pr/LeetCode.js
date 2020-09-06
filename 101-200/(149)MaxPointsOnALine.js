/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const length = points.length;

  if (length < 3) {
    return length;
  }

  const map = new Map();
  let res = 0;
  let duplicate;
  let max;
  let x;
  let y;
  let divisor;

  for (let i = 0; i < length; i++) {
    duplicate = 0;
    max = 0;
    map.clear();

    for (let j = i + 1; j < length; j++) {
      x = points[j][0] - points[i][0];
      y = points[j][1] - points[i][1];

      if (x == 0 && y == 0) {
        duplicate++;
        continue;
      }

      divisor = gcd(x, y);
      x = x / divisor;
      y = y / divisor;
      key = x + "," + y;

      map.set(key, map.get(key) + 1 || 1);
      max = Math.max(max, map.get(key));
    }

    res = Math.max(res, max + duplicate + 1);
  }

  return res;
};

var gcd = function(a, b) {
  let temp;
  while (b != 0) {
    temp = a % b;
    a = b;
    b = temp;
  }

  return a;
}

// time:  O(n^2)
// space: O(n)

// test cases:
// []
// [[0, 0]]
// [[0, 0], [1, 1]]
// [[1, 1], [2, 2], [3, 3]]
// [[1, 1], [2, 2], [3, 4]]
// [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]
