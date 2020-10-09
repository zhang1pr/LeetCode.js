/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
  if (transactions.length == 0) {
    return 0;
  }

  const map = new Map();
  for (let [a, b, m] of transactions) {
    if (!map.has(a)) {
      map.set(a, 0);
    }

    if (!map.has(b)) {
      map.set(b, 0);
    }

    map.set(a, map.get(a) - m);
    map.set(b, map.get(b) + m);
  }

  const debts = [...map.values()].filter(debt => debt != 0);

  const len = debts.length;

  function DFS(index, d) {
    if (index >= d.length) {
      return 0;
    }

    const cur = d[index];
    if (cur == 0) {
      return DFS(index + 1, d);
    }

    let res = Infinity;
    for (let i = index + 1; i < len; i++) {
      const next = d[i];

      if (cur * next < 0) {
        d[i] = cur + next;
        res = Math.min(res, 1 + DFS(index + 1, d));
        d[i] = next;

        if (next + cur == 0) {
          break;
        }
      }
    }

    return res;
  };

  return DFS(0, debts);
};

// time:  O(n!)
// space: O(n)

// [[0, 1, 10], [2, 0, 5]]
// [[0, 1, 10], [1, 0, 1], [1, 2, 5], [2, 0, 5]]
