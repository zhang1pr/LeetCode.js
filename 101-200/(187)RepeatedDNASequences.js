/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const BASE_SIZE = 4 ** 10;

  const map = {
    'A': 0,
    'C': 1,
    'G': 2,
    'T': 3
  }

  const res = [];
  const unpushedSet = new Set();
  const pushedSet = new Set();

  let hash = 0;
  for (let i = 0; i < 10; i++) {
    hash *= 4;
    hash += map[s[i]];
  }

  unpushedSet.add(hash);

  for (let i = 1; i <= s.length - 10; i++) {
    hash = hash * 4 - map[s[i - 1]] * BASE_SIZE + map[s[i + 9]];

    if (unpushedSet.has(hash)) {
      if (!pushedSet.has(hash)) {
        res.push(s.substr(i, 10));
        pushedSet.add(hash);
      }
    } else {
      unpushedSet.add(hash);
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// 'G'
// 'AAAAAAAAAAAAAAA'
// 'AGAGAGAGAGAGAGA'
// 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
