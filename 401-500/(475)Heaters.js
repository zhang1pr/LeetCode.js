/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  heaters.sort((a, b) => a - b);

  let max = 0;
  for (const house of houses) {
    max = Math.max(max, findMinDistance(house, heaters));
  }

  return max;
};

var findMinDistance = function(house, heaters) {
  let left = 0;
  let right = heaters.length - 1;
  let mid;

  while (left <= right) {
    mid = (left + right) >>> 1;

    if (heaters[mid] <= house && house <= heaters[mid + 1]) {
      return Math.min(house - heaters[mid], heaters[mid + 1] - house);
    } else if (heaters[mid] <= house) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (left == 0) {
    return heaters[0] - house;
  }

  if (left == heaters.length) {
    return house - heaters[heaters.length - 1];
  }
};

// time:  O(nlog(n))
// space: O(1)

// [1,5], [2]
// [1,2,3], [2]
// [1,2,3,4], [1,4]
