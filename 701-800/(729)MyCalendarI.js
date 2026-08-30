var MyCalendar = function() {
  this.calendar = [];
};

// time:  O(1)
// space: O(1)

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
  for (const [start, end] of this.calendar) {
    if (start < endTime && startTime < end) {
      return false;
    }
  }

  this.calendar.push([startTime, endTime]);
  return true;
};

// time:  O(1)
// space: O(1)

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */

// ['MyCalendar', 'book', 'book', 'book'], [[], [10, 20], [15, 25], [20, 30]]
