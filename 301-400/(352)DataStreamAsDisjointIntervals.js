/**
 * Initialize your data structure here.
 */
var SummaryRanges = function () {
  this.array = [];
};

// time:  O(1)
// space: O(1)

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  this.array[val] = true;
};

// time:  O(1)
// space: O(1)

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  const res = [];
  let start = -1;

  for (let i = 0; i < this.array.length; i++) {
    if (start == -1) {
      if (this.array[i]) {
        start = i;
      }
    } else if (!this.array[i]) {
      res.push([start, i - 1]);
      start = -1;
    }
  }

  if (start != -1) {
    res.push([start, this.array.length - 1]);
  }

  return res;
};

// time:  O(n)
// space: O(1)

// ['SummaryRanges', 'addNum', 'getIntervals', 'addNum', 'getIntervals', 'addNum', 'getIntervals', 'addNum', 'getIntervals', 'addNum', 'getIntervals'], [[], [1], [], [3], [], [7], [], [2], [], [6], []]
