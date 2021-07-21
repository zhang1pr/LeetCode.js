/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  hand.sort((a, b) => a - b);
  const map = new Map();

  for (const h of hand) {
    map.set(h, (map.get(h) || 0) +1);
  }

  for (const [key, val] of map) {
    if (val > 0) {
      for (let i = groupSize - 1; i >= 0; i--) {
        const newVal = (map.get(key + i) || 0) - val;

        if (newVal < 0) {
          return false;
        }

        map.set(key + i, newVal);
      }
    }
  }

  return true;
};

// time:  O(nlogn+n*groupLen)
// space: O(n)

// [2, 1], 2
// [1, 2, 3, 4, 5], 4
// [1, 2, 3, 6, 2, 3, 4, 7, 8], 3
