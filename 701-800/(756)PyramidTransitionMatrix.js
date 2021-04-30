/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
 var pyramidTransition = function(bottom, allowed) {
  const map = new Map();

  for (const str of allowed) {
    const pre = str.slice(0, 2);

    if (!map.has(pre)) {
      map.set(pre, new Set());
    }

    map.get(pre).add(str[2]);
  }

  function DFS(row, nextRow, i) {
    if (row.length == 1) {
      return true;
    }

    if (nextRow.length + 1 == row.length) {
      return DFS(nextRow, '', 1);
    }

    const str = row.slice(i - 1, i + 1);

    for (const ch of map.get(str) || new Set()) {
      if (DFS(row, nextRow + ch, i + 1)) {
        return true;
      }
    }

    return false;
  }

  return DFS(bottom, '', 1);
};

// time:  O(sLen^n)
// space: O(n)

// 'BCD', ['BCG', 'CDE', 'GEA', 'FFF']
// 'AABA', ['AAA', 'AAB', 'ABA', 'ABB', 'BAC']
