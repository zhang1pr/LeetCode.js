/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let length1 = nums1.length;
  let length2 = nums2.length;

  if (length1 > length2) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const leftHalfLength = Math.ceil((length1 + length2) / 2);

  let minNums1 = 0;
  let maxNums1 = length1;

  while (minNums1 <= maxNums1) {
    const countNums1 = (minNums1 + maxNums1) >>> 1;
    const countNums2 = leftHalfLength - countNums1;

    const x = nums1[countNums1 - 1];
    const y = nums2[countNums2 - 1];
    const xPrime = nums1[countNums1];
    const yPrime = nums2[countNums2];

    if (x != null && yPrime != null && x > yPrime) {
      maxNums1 = countNums1 - 1;
    } else if (y != null && xPrime != null && y > xPrime) {
      minNums1 = countNums1 + 1;
    } else {
      let leftHalfEnd;

      if (x && y) {
        leftHalfEnd = Math.max(x, y);
      } else {
        leftHalfEnd = x || y;
      }

      if ((length1 + length2) & 1 == 1) {
        return leftHalfEnd;
      }

      let rightHalfStart;

      if (xPrime && yPrime) {
        rightHalfStart = Math.min(xPrime, yPrime);
      } else {
        rightHalfStart = xPrime || yPrime;
      }


      return (leftHalfEnd + rightHalfStart) / 2;
    }
  }
};

// time:  O(log(min(m,n)))
// space: O(1)

// [1], []
// [1, 3], [2]
// [1, 2], [3, 4, 5]
// [1, 3, 5], [2, 4, 6]
