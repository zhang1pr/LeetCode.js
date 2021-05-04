/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const last = Array(26).fill(0);

  for (let i = 0; i < S.length; i++) {
    last[S[i].charCodeAt(0) - 97] = i;
  }

  let j = 0;
  let anchor = 0;
  const res = [];

  for (let i = 0; i < S.length; i++) {
    j = Math.max(j, last[S[i].charCodeAt(0) - 97]);

    if (i == j) {
      res.push(i - anchor + 1);
      anchor = i + 1;
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// 'a'
// 'aa'
// 'ab'
// 'aba'
// 'abb'
// 'abc'
// "ababcbacadefegdehijhklij"
