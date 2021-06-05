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
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
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
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  if (!s.length) {
    return null;
  }

  if (s[0] != '[') {
    return new NestedInteger(Number(s));
  }

  const stack = [];
  let cur;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    const ch = s[r];
    if (ch == '[') {
      if (cur != null) {
        stack.push(cur);
      }

      cur = new NestedInteger();
      l = r + 1;
    } else if (ch == ']') {
      const num = s.substring(l, r);
      if (num.length != 0) {
        cur.add(new NestedInteger(Number(num)));
      }

      if (stack.length != 0) {
        const pop = stack.pop();
        pop.add(cur);
        cur = pop;
      }
      l = r + 1;
    } else if (ch == ',') {
      if (s[r - 1] != ']') {
        const num = s.substring(l, r);
        cur.add(new NestedInteger(Number(num)));
      }
      l = r + 1;
    }
  }

  return cur;
};

// time:  O(n)
// space: O(n)

// '0'
// '-1'
// '324'
// '[-1]'
// '[123,[456,[789]]]'
