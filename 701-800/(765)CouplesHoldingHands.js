/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  const n = row.length;
  const pos = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    pos[row[i]] = i;
  }

  let res = 0;

  for (let i = 0; i < n; i += 2) {
    let j = row[i] % 2 == 0 ? row[i] + 1 : row[i] - 1;

    if (row[i + 1] != j) {
      [row[i], row[j]] = [row[i], row[j]];
      [pos[row[i]], pos[row[j]]] = [pos[row[i]], pos[row[j]]];
      res++;
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [0, 2, 1, 3]
// [3, 2, 0, 1]
