/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num == 0) {
    return 'Zero';
  }

  const nums1 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const nums2 = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const nums3 = ['', 'Thousand', 'Million', 'Billion'];

  let res = '';

  let count = 0;
  let threeNum;
  let twoNum;
  while (num > 0) {
    threeNum = num % 1000;

    if (threeNum > 0) {
      res = ' ' + nums3[count] + res;
    }

    count++;

    twoNum = num % 100;
    if (twoNum < 20) {
      if (twoNum > 0) {
        res = ' ' + nums1[twoNum] + res;
      }
    } else {
      const remainder = twoNum % 10;
      if (remainder > 0) {
        res = ' ' + nums1[remainder] + res;
      }

      res = ' ' + nums2[(twoNum - remainder) / 10] + res;
    }

    if (threeNum >= 100) {
      res = ' Hundred' + res;
      res = ' ' + nums1[Math.floor(threeNum / 100)] + res;
    }

    num = Math.floor(num / 1000);
  }

  return res.trim();
};

// time:  O(log(n))
// space: O(1)

// 123
// 12345
// 1234567
// 1234567891
