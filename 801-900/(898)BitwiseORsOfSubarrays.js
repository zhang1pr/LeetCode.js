/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
  const res = new Set();
  let cur = new Set();
  let cur2;

  for (const i of arr) {
    cur2 = new Set().add(i);

    for (const j of cur) {
      cur2.add(i | j);
    }

    for (const k of cur2) {
      res.add(k);
    }

    cur = cur2;
  }

  return res.size;
};

// time:  O(n)
// space: O(n)

// [0]
// [1, 1, 2]
// [1, 2, 4]
