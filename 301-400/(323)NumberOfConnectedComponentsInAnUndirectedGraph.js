/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  const nums = Array(n).fill(-1);

  function find(i) {
    if (nums[i] === -1) {
      return i;
    }

    return find(nums[i]);
  }

  for (let i = 0; i < edges.length; i++) {
    const x = find(edges[i][0]);
    const y = find(edges[i][1]);

    if (x != y) {
      nums[x] = y;
    }
  }

  return nums.filter(num => num == -1).length;
};

// time:  O(n^2)
// space: O(n)

// 5, [[0, 1], [1, 2], [3, 4]]
// 5, [[0, 1], [1, 2], [2, 3], [3, 4]]
