/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let nums1 = version1.split('.');
  let nums2 = version2.split('.');

  let i = 0;
  let j = 0;
  while (i < nums1.length || j < nums2.length) {
    num1 = i < nums1.length ? nums1[i] : "0";
    num2 = j < nums2.length ? nums2[j] : "0";

    const res = compare(num1, num2);

    if (res != 0) {
      return res;
    }

    i++;
    j++;
  }

  return 0;
};

var compare = function(num1, num2) {
  const regex = /^0+/;
  num1 = num1.replace(regex, '');
  num2 = num2.replace(regex, '');

  const length1 = num1.length;
  const length2 = num2.length;

  if (length1 > length2) {
    return 1;
  } else if (length1 < length2) {
    return -1;
  } else {
    for (let i = 0; i < length1; i++) {
      if (num1[i] - num2[i] > 0) {
        return 1;
      } else if (num1[i] - num2[i] < 0) {
        return -1;
      }
    }

    return 0;
  }
}

// time:  O(n)
// space: O(n)

// test cases:
// 0, 0
// 0, 0.0
// 0, 0.1
// 0, 1
// 0, 1.1
// 1.0.1, 1.01
// 1.0.1, 101
// 7.5.2.4, 7.5.3
