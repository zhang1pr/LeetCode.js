/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) {
    return [];
  }

  const res = [];

  function validate(str) {
    if (str[0] == '0') {
      return str.length == 1;
    } else {
      const val = Number(str);
      return val > 0 && val <= 255;
    }
  }

  for (let a = 0; a < 4; a++) {
    for (let b = 0; b < 4; b++) {
      for (let c = 0; c < 4; c++) {
        const str1 = s.slice(0, a);
        const str2 = s.slice(a, a + b);
        const str3 = s.slice(a + b, a + b + c);
        const str4 = s.slice(a + b + c);

        if (validate(str1) && validate(str2) && validate(str3) && validate(str4)) {
          res.push(str1 + '.' + str2 + '.' + str3 + '.' + str4);
        }
      }
    }
  }

  return res;
};

// time:  O(1)
// space: O(1)

// '111'
// '2555'
// '010010'
// '25525511135'
// '255255111355'
// '2552551111111'
