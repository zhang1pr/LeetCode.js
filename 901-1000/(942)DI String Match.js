/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  const res = [];
  let inc = 0;
  let dec = s.length;
  let i = 0;

  while (res.length != s.length + 1) {
    if (s[i] == 'D') {
      res[i] = dec;
      dec--;  
    } else {
      res[i] = inc;
      inc++;
    }

    i++;
  }

  return res;  
};

// time:  O(n)
// space: O(1)

// 'III'
// 'DDI'
// 'IDID'