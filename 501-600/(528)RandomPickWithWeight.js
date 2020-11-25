/**
 * @param {number[]} w
 */
var Solution = function(w) {
  const arr = [0];

  for (let i = 0; i < w.length; i++) {
    arr[i + 1] = arr[i] + w[i];
  }

  this.weights = arr;
  this.maxWeight = arr[arr.length - 1];
};

// time:  O(n)
// space: O(n)

/**
* @return {number}
*/
Solution.prototype.pickIndex = function() {
  function getRandInt(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  }

  const r = getRandInt(0, this.maxWeight);
  let start = 0;
  let end = this.weights.length - 2;

  while (start <= end) {
    let mid = (start + end) >>> 1;

    if (this.weights[mid] === r) {
      return mid;
    } else if (this.weights[mid] < r) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (this.weights[end] <= r) {
    return end;
  }

  return start;
};

// time:  O(log(n))
// space: O(1)

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/

// ['Solution', 'pickIndex'], [[[1]], []]
// ['Solution', 'pickIndex', 'pickIndex', 'pickIndex', 'pickIndex', 'pickIndex'], [[[1,3]], [], [], [], [], []]
