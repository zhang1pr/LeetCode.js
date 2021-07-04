/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  function request(a, b) {
    return b > 0.5 * a + 7 && b <= a;
  }

  const cnt = new Map();
  for (const age of ages) {
    cnt.set(age, (cnt.get(age) || 0) + 1);
  }

  let res = 0;
  for (const [keyA, valA] of cnt) {
    for (const [keyB, valB] of cnt) {
      if (request(keyA, keyB)) {
        res += valA * (valB - (keyA == keyB ? 1 : 0));
      }
    }
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// [16, 16]
// [16, 17, 18]
// [20, 30, 100, 110, 120]
