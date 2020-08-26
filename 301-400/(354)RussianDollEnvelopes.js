/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => {
    return a[0] == b[0] ? b[1] - a[1] : a[0] - b[0];
  });
  
  const dp = [];
  for (let i = 0; i < envelopes.length; i++) {
    const index = binarySearch(dp, envelopes[i][1]);
    
    if (index == -1) {
      dp.push(envelopes[i][1]);
    } else if (index != -1) {
      dp[index] = envelopes[i][1];
    }
  }

  return dp.length;
};
 
 
function binarySearch(arr, val) {
  let l = 0; 
  let r = arr.length - 1;
  let res = -1;

  while (l <= r) {
    let mid = (l + r) >>> 1;
    
    if (arr[mid] >= val) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
}

// time:  O(nlog(n))
// space: O(n)

// [[1, 1]]
// [[1, 1], [0, 1]]
// [[1, 1], [0, 1]], [1, 2]
// [[5, 4], [6, 4], [6, 7], [2, 3]]
// [[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]]
