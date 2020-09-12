/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const res = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const hOnes = h ? h.toString(2).match(/1/g).length : 0;
      const mOnes = m ? m.toString(2).match(/1/g).length : 0;

      if (hOnes + mOnes === num) {
        res.push(`${h}:${m < 10 ? `0${m}` : m}`);
      }
    }
  }

  return res;
};

// time:  O(log(n))
// space: O(n)

// 1
// 2
// 3
// 5
