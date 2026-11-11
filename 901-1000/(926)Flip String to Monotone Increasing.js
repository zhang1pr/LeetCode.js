/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let countFlip = 0;
  let countOne = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '1') {
      countOne++;
    } else {
      countFlip++;
      countFlip = Math.min(countFlip, countOne);
    }
  }
  
  return countFlip;
};

// time:  O(n)
// space: O(1)

// '00110'
// '010110'
// '00011000'