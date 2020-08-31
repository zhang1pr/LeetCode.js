/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
  function getDepth(arr, level) {
    let maxDepth = level;

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].isInteger()) {
        maxDepth = Math.max(maxDepth, getDepth(arr[i].getList(), level + 1));
      }
    }

    return maxDepth;
  }

  let depth = getDepth(nestedList, 1);

  function DFS(arr, level) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isInteger()) {
        sum += arr[i].getInteger() * level;
      } else {
        sum += DFS(arr[i].getList(), level - 1);
      }
    }

    return sum;
  }

  return DFS(nestedList, depth);
};

// time:  O(n)
// space: O(n)

// [1]
// [1, [2]]
// [1, [4, [6]]]
// [[1, 1], 2, [1, 1]]
