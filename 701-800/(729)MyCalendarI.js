var MyCalendar = function() {
  this.calendar = [];
};

// time:  O(1)
// space: O(1)

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

// time:  O(1)
// space: O(1)

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

// ['MyCalendar', 'book', 'book', 'book'], [[], [10, 20], [15, 25], [20, 30]]
