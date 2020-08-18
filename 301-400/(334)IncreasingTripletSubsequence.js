/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let small = Infinity;
  let big = Infinity;

  for (const n of nums) {
    if (n <= small) { 
      small = n; 
    } else if (n <= big) { 
      big = n; 
    } else {
      return true;
    }
  }

  return false;  
};

// [1]
// [1, 1]
// [1, 2]
// [1, 2, 3]
// [2, 1, 3]
// [1, 1, 2, 3]
// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]
