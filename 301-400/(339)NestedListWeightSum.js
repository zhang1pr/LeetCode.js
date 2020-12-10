// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

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
var depthSum = function(nestedList) {
  function DFS(arr, level) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isInteger()) {
        sum += arr[i].getInteger() * level;
      } else {
        sum += DFS(arr[i].getList(), level + 1);
      }
    }

    return sum;
  }

  return DFS(nestedList, 1);
};

// time:  O(n)
// space: O(n)

// [1]
// [[1]]
// [1, 2, 3]
// [1, [[[0]]]]
// [1, [4, [6]]]
// [[1, 1], 2, [1, 1]]
