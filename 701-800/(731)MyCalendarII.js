var MyCalendarTwo = function() {
  this.calendar = [];
  this.overlaps = [];
};

// time:  O(1)
// space: O(1)

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(startTime, endTime) {
  for (const [start, end] of this.overlaps) {
    if (start < endTime && startTime < end) {
      return false;
    }
  }

  for (const [start, end] of this.calendar) {
    if (start < endTime && startTime < end) {
      this.overlaps.push([Math.max(startTime, start), Math.min(endTime, end)]);
    }
  }

  this.calendar.push([startTime, endTime]);

  return true;
};

// time:  O(n^2)
// space: O(n)

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */

// ['MyCalendarTwo', 'book', 'book', 'book', 'book', 'book', 'book'], [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
