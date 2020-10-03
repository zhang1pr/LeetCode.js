/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex == 0) {
    return [1];
  }

  let prevRow = [1];
  let row;

  for (let i = 1; i <= rowIndex; i++) {
    row = [1];

    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1]+ prevRow[j]);
    }

    row.push(1);

    prevRow = row;
  }

  return row;
};

// time:  O(n^2)
// space: O(1)

// 0
// 1
// 2
// 3
