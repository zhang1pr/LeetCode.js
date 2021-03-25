var LogSystem = function() {
  this.arr = []
};

// time:  O(1)
// space: O(1)

/**
* @param {number} id
* @param {string} timestamp
* @return {void}
*/
LogSystem.prototype.put = function(id, timestamp) {
  this.arr.push([id, timestamp]);
};

// time:  O(1)
// space: O(1)

/**
* @param {string} start
* @param {string} end
* @param {string} granularity
* @return {number[]}
*/
LogSystem.prototype.retrieve = function(start, end, granularity) {
  const index = new Map([['Year', 5], ['Month', 8], ['Day', 11], ['Hour', 14], ['Minute', 17], ['Second', 20]]).get(granularity);
  start = start.slice(0, index);
  end = end.slice(0, index);

  const res = [];

  for (let i = 0; i < this.arr.length; i++){
    let [id, timestamp] = this.arr[i];
    timestamp = timestamp.slice(0, index);

    if (timestamp >= start && timestamp <= end) {
      res.push(id);
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

/**
* Your LogSystem object will be instantiated and called as such:
* var obj = new LogSystem()
* obj.put(id,timestamp)
* var param_2 = obj.retrieve(start,end,granularity)
*/

// ['LogSystem', 'put', 'put', 'put', 'retrieve', 'retrieve'], [[], [1,'2017:01:01:23:59:59'], [2,'2017:01:01:22:59:59'], [3,'2016:01:01:00:00:00'], ['2016:01:01:01:01:01', '2017:01:01:23:00:00', 'Year'], ['2016:01:01:01:01:01', '2017:01:01:23:00:00', 'Hour']]
