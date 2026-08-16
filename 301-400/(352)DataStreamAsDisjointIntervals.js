var SummaryRanges = function() {
  this.arr = [];
};

// time:  O(1)
// space: O(1)

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  this.arr[val] = true;
};

// time:  O(1)
// space: O(1)

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const res = [];
  let start = -1;

  for (let i = 0; i < this.arr.length; i++) {
    if (start == -1) {
      if (this.arr[i]) {
        start = i;
      }
    } else if (!this.arr[i]) {
      res.push([start, i - 1]);
      start = -1;
    }
  }

  if (start != -1) {
    res.push([start, this.arr.length - 1]);
  }

  return res;
};

// time:  O(n)
// space: O(1)

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */

// ['SummaryRanges', 'addNum', 'getIntervals', 'addNum', 'getIntervals', 'addNum', 'getIntervals', 'addNum', 'getIntervals', 'addNum', 'getIntervals'], [[], [1], [], [3], [], [7], [], [2], [], [6], []]
