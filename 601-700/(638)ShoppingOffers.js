/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
  function DFS(price, special, needs, map) {
    if (map.has(needs)) {
      return map.get(needs);
    }

    let j = 0;
    let res = dot(needs, price);

    for (const s of special) {
      const clone = needs.slice();

      for (j = 0; j < needs.length; j++) {
        const diff = clone[j] - s[j];

        if (diff < 0) {
          break;
        }

        clone[j] = diff;
      }

      if (j == needs.length) {
        res = Math.min(res, s[j] + DFS(price, special, clone, map));
      }
    }

    map.set(needs, res);
    return res;
  }

  return DFS(price, special, needs, new Map());
};

var dot = function(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
};

// time:  O(offerLen^(itemLen*count)*itemLen)
// space: O(offerLen^(itemLen*count))

// [2, 5], [[3, 0, 5], [1, 2, 10]], [3, 2]
// [2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 2, 1]
