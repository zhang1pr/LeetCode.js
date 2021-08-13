/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  const mapB = nums2.map((n, i) => [n, i]);
  const len = nums1.length;
  const res = [];
  const bin = []

  nums1.sort((a, b) => a - b);
  mapB.sort((a, b) => a[0] - b[0]);

  let curB = 0;

  for (let i = 0; i < len; i++) {
    const [numB, idxB] = mapB[curB];

    if (numB >= nums1[i]) {
      bin.push(nums1[i]);
    } else {
      res[idxB] = nums1[i];
      curB++;
    }
  }

  for (let i = 0; i < len; i++) {
    if (res[i] == null) {
      res[i] = bin.pop();
    }
  }

  return res;
};

// time:  O(nlog(n))
// space: O(n)

// [1], [0]
// [1], [1]
// [1], [2]
// [2, 7, 11, 15], [1, 10, 4, 11]
// [12, 24, 8, 32], [13, 25, 32, 11]
