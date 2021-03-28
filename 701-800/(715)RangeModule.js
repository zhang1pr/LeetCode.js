var RangeModule = function() {
  this.intervals = [];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
  const n = this.intervals.length;
  const tmp = [];

  for (let i = 0; i <= n; i++) {
    if (i == n || this.intervals[i][0] > right) {
      tmp.push([left, right]);
      while (i < n) {
        tmp.push(this.intervals[i]);
        i++;
      }
    } else if (this.intervals[i][1] < left) {
      tmp.push(this.intervals[i]);
    } else {
      left = Math.min(left, this.intervals[i][0]);
      right = Math.max(right, this.intervals[i][1]);
    }
  }

  this.intervals = tmp;
};

// time:  O(n)
// space: O(n)

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
  let l = 0;
  let r = this.intervals.length - 1;
  let mid;

  while (l <= r) {
    mid = l + r >> 1;

    if (this.intervals[mid][0] >= right) {
      r = mid - 1;
    } else if (this.intervals[mid][1] <= left) {
      l = mid + 1;
    } else {
      return this.intervals[mid][0] <= left && this.intervals[mid][1] >= right;
    }
  }

  return false;
};

// time:  O(log(n))
// space: O(1)

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
  const n = this.intervals.length;
  const tmp = [];

  for (let i = 0; i < n; i++) {
    if (this.intervals[i][1] <= left || this.intervals[i][0] >= right) {
      tmp.push(this.intervals[i]);
    } else {
      if (this.intervals[i][0] < left) {
        tmp.push([this.intervals[i][0], left]);
      }

      if (this.intervals[i][1] > right) {
        tmp.push([right, this.intervals[i][1]]);
      }
    }
  }

  this.intervals = tmp;
};

// time:  O(n)
// space: O(n)

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */

// ['RangeModule', 'addRange', 'removeRange', 'queryRange', 'queryRange', 'queryRange'], [[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]
