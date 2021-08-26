/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const length = gas.length;

  let totalTank = 0;
  let curTank = 0;
  let station = 0;

  for (let i = 0; i < length; i++) {
    totalTank += gas[i] - cost[i];
    curTank += gas[i] - cost[i];

    if (curTank < 0) {
      station = i + 1;
      curTank = 0;
    }
  }

  return totalTank >= 0 ? station : -1;
};

// time:  O(n)
// space: O(1)

// [2, 3, 4], [3, 4, 3]
// [1, 2, 3, 4, 5], [3, 4, 5, 1, 2]
