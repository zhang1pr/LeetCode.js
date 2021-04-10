var MyCalendarTwo = function() {
  this.calendar = [];
  this.overlaps = [];
};

// time:  O(1)
// space: O(1)

/**
* @param {number} start
* @param {number} end
* @return {boolean}
*/
MyCalendarTwo.prototype.book = function(start, end) {
  for (const event of this.overlaps) {
    if (event[0] < end && start < event[1]) {
      return false;
    }
  }

  for (const event of this.calendar) {
    if (event[0] < end && start < event[1]) {
      this.overlaps.push([Math.max(start, event[0]), Math.min(end, event[1])]);
    }
  }

  this.calendar.push([start, end]);

  return true;
};

// time:  O(n^2)
// space: O(n)

/**
* Your MyCalendarTwo object will be instantiated and called as such:
* var obj = new MyCalendarTwo()
* var param_1 = obj.book(start,end)
*/

// ['MyCalendarTwo', 'book', 'book', 'book', 'book', 'book', 'book'], [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
