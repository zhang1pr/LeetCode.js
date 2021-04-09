var MyCalendar = function() {
  this.calendar = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (const event of this.calendar) {
    if (event[0] < end && start < event[1]) {
      return false;
    }
  }

  this.calendar.push([start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

// time:  O(n^2)
// space: O(n)

// ['MyCalendar', 'book', 'book', 'book'], [[], [10, 20], [15, 25], [20, 30]]
