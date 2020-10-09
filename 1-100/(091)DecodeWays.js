/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let last = 1;
  let cur = s[0] == 0 ? 0 : 1;

  for (let i = 1; i < s.length; i++) {
    let one = 0;
    let two = 0;

    if (s[i] != 0) {
      one = cur;
    }

    if (s[i - 1] != 0 && Number(s.slice(i - 1, i + 1)) <= 26) {
      two = last;
    }

    last = cur;
    cur = one + two;
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
