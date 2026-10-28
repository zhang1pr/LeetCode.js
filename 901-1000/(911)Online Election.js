/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  const n = persons.length;
  let lead = -1;
  const count = new Map();
  this.leads = [];
  this.times = times;

  for (let i = 0; i < n; i++) {
    count.set(persons[i], (count.get(persons[i]) || 0) + 1);
    if (i == 0 || count.get(persons[i]) >= count.get(lead)) {
      lead = persons[i];
    }
    
    this.leads.push(lead);
  }
};

// time:  O(n)
// space: O(n)

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  let low = 0;
  let high = this.times.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (t < this.times[mid]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return this.leads[low - 1];
};

// time:  O(log(n))
// space: O(1)

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

// ['TopVotedCandidate', 'q', 'q', 'q', 'q', 'q', 'q'], [[[0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]], [3], [12], [25], [15], [24], [8]]