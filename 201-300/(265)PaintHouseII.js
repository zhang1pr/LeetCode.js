/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
  if (costs === null || costs.length === 0) {
    return 0;
  }
  
  let min1Index = -1;
  let min1 = 0;
  let min2 = 0;
  let oldMin1Index;
  let oldMin1;
  let oldMin2;

  for (let i = 0; i < costs.length; i++) {
    oldMin1Index = min1Index;
    oldMin1 = min1;
    oldMin2 = min2;
    
    min1Index = -1;
    min1 = Infinity;
    min2 = Infinity;
    
    for (let j = 0; j < costs[i].length; j++) {
      if (j === oldMin1Index) {
        costs[i][j] += oldMin2;
      } else {
        costs[i][j] += oldMin1;
      }
      
      if (costs[i][j] < min1) {
        min2 = min1;
        min1 = costs[i][j];
        min1Index = j;
      } else if (costs[i][j] < min2) {
        min2 = costs[i][j];
      }
    }
  }

  return min1;
};


// time:  O(nk)
// space: O(1)

// []
// [[1], [1], [1]]
// [[1], [2], [3]]
// [[1, 2], [1, 4], [2, 3]]
// [[1, 5, 3], [2, 9, 4]]
// [[17, 2, 17], [16, 16, 5], [14, 3, 19]]
