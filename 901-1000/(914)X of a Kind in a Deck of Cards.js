/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const map = new Map();
  let res = 0;
  
  for (const x of deck) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  
  for (const x of map.values()) {
    res = gcd(x, res);
  }

  return res > 1;
};

function gcd(a, b) {
  let temp;
  while (b != 0) {
    temp = a % b;
    a = b;
    b = temp;
  }

  return a;
}

// time:  O(nlog(max))
// space: O(n)

// [1, 1, 1, 2, 2, 2, 3, 3]
// [1, 2, 3, 4, 4, 3, 2, 1]