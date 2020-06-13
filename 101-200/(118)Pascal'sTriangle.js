/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows == 0) {
    return [];
  }

  const triangle = [[1]];
  let prevRow;

  for (let i = 1; i < numRows; i++) {
    const row = [1];
    prevRow = triangle[i - 1];

    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1]+ prevRow[j]);
    }

    row.push(1);

    triangle.push(row);
  }

  return triangle;
};

// time:  O(n^2)
// space: O(1)

// test cases:
// 0
// 1
// 2
// 3
