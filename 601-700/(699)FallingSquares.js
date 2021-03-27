/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
  const arr = Array(positions.length).fill(0);

  for (let i = 0; i < positions.length; i++) {
    const [left, size] = positions[i];
    const right = left + size;
    arr[i] += size;

    for (let j = i + 1; j < positions.length; j++) {
      const [nextLeft, nextSize] = positions[j];
      const nextRight = nextLeft + nextSize;
      if (nextLeft < right && left < nextRight) {
        arr[j] = Math.max(arr[j], arr[i]);
      }
    }
  }

  const res = [];
  let cur = -1;

  for (const num of arr) {
    cur = Math.max(cur, num);
    res.push(cur);
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// [[1, 2], [2, 3], [6, 1]]
// [[100, 100], [200, 100]]
