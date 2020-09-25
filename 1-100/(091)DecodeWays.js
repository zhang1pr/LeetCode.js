/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let end = 1;
  let cur = 0;
  if (s[s.length - 1] != '0') {
    cur = 1;
  }

  for (let i = s.length - 2; i >= 0; i--) {
    if (s[i] == '0') {
      end = cur;
      cur = 0;
      continue;
    }

    let temp = 0;
    if (Number(s[i]) * 10 + Number(s[i+1]) <= 26) {
      temp = end;
    }

    end = cur;
    cur += temp;
  }

  return cur;
};

// time:  O(n)
// space: O(1)

// '1'
// '10'
// '11'
// '226'
// '227'
// '1101'
// '1111'
// '192919'
