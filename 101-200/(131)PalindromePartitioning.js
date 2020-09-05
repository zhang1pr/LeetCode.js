/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = [];
  const length = s.length;
  const dp = new Array(length).fill(0).map(() => new Array(length).fill(0));
  const stack = [];

  for (let diff = 1; diff <= length; diff++) {
    for (let i = 0; i <= s.length - diff; i++) {
      dp[i][i + diff - 1] = s[i] == s[i + diff - 1] && (diff < 3 || dp[i + 1][i + diff - 2]);
    }
  }

  function DFS(start) {
    if (start == s.length) {
      res.push(stack.slice());
    }

    for (let i = start; i < s.length; i++) {
      if (dp[start][i]) {
        stack.push(s.slice(start, i + 1));
        DFS(i + 1);
        stack.pop();
      }
    }
  }

  DFS(0);

  return res;
};

// time:  O(n^2)
// space: O(m^2)

// test cases:
// ''
// 'a'
// 'aa'
// 'ab'
// 'aab'
// 'aabb'
// 'aabcbbca'
