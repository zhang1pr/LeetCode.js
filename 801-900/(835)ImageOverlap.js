/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
var largestOverlap = function(A, B) {
  function shiftAndCount(xShift, yShift, M, R) {
    let leftShiftCount = 0;
    let rightShiftCount = 0;
    let rRow = 0;

    for (let mRow = yShift; mRow < M.length; mRow++) {
      let rCol = 0;

      for (let mCol = xShift; mCol < M.length; mCol++) {
        if (M[mRow][mCol] == 1 && M[mRow][mCol] == R[rRow][rCol]) {
          leftShiftCount++;
        }

        if (M[mRow][rCol] == 1 && M[mRow][rCol] == R[rRow][mCol]) {
          rightShiftCount++;
        }

        rCol++;
      }

      rRow++;
    }

    return Math.max(leftShiftCount, rightShiftCount);
  }

  maxOverlaps = 0;

  for (let yShift = 0; yShift < A.length; yShift++) {
    for (let xShift = 0; xShift < A.length; xShift++) {
      maxOverlaps = Math.max(maxOverlaps, shiftAndCount(xShift, yShift, A, B));
      maxOverlaps = Math.max(maxOverlaps, shiftAndCount(xShift, yShift, B, A));
    }
  }

  return maxOverlaps;
};

// time:  O(n^4)
// space: O(1)

// [[0]], [[0]]
// [[0]], [[1]]
// [[1]], [[1]]
// [[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 1, 1], [0, 0, 1]]
