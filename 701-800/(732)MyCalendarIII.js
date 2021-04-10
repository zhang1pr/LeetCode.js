var MyCalendarThree = function() {
  this.map = new Map();
};

// time:  O(1)
// space: O(1)

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
  this.map.set(start, (this.map.get(start) || 0) + 1);
  this.map.set(end, (this.map.get(end) || 0) - 1);

  let res = 0;
  let cur = 0;

  const arr = [...this.map.keys()].sort((a, b) => a - b);

  for (const key of arr) {
    cur += this.map.get(key);
    res = Math.max(res, cur);
  }

  return res;
};

// time:  O(nlog(n))
// space: O(n)

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

// ['MyCalendarThree', 'book', 'book', 'book', 'book', 'book', 'book'], [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
