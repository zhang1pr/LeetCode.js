/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);

  const res = [];
  for (const p of people) {
    res.splice(p[1], 0, p);
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
