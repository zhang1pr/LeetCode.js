/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const stack = [];
	senate = [...senate];

  while (senate.length) {
    const left = [];

    for (const ch of senate) {
      if (stack.length == 0 || stack[stack.length - 1] == ch) {
        stack.push(ch);
      } else {
        left.push(stack.pop());
      }
    }

    senate = left;
  }

  if (stack[stack.length - 1] == 'R') {
    return 'Radiant';
  } else {
    return 'Dire';
  }
};

// time:  O(nlog(n))
// space: O(n)

// 'D'
// 'R'
// 'DR'
// 'RD'
// 'DDR'
// 'DRR'
// 'RDD'
// 'RRD'
// 'DDRRR'
