/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length != s3.length) {
    return false;
  }

  const visited = [...Array(s1.length + 1)].map(() => Array(s2.length + 1).fill(false));

  let cur = [[0, 0]];

  while (cur.length) {
    let next = [];

    for (let [i, j] of cur) {
      if (i == s1.length && j == s2.length) {
        return true;
      }

      let temp1 = visited[i][j];
      let temp2 = visited[i][j];

      if (i < s1.length && !temp1 && s1[i] == s3[i + j]) {
        temp1 = true;
        next.push([i + 1, j]);
      }

      if (j < s2.length && !temp2 && s2[j] == s3[i + j]) {
        temp2 = true;

        next.push([i, j + 1]);
      }

      visited[i][j] = temp1 || temp2;
    }

    cur = next;
  }

  return false;
};

// time:  O(mn)
// space: O(mn)

// '', '', 'a'
// 'a', 'a', 'a'
// 'a', 'a', 'aa'
// 'ab', 'ba', 'baba'
// 'aabcc', 'dbbca', 'aadbbcbcac'
// 'aabcc', 'dbbca', 'aadbbbaccc'
