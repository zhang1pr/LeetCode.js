/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  const dir = input.split('\n');
  let max = 0;
  let depth= 0;
  const dp = [];

  for (let i = 0; i < dir.length; i++) {
    depth = dir[i].lastIndexOf('\t') + 1;

    if (dir[i].includes('.')) {
      max = Math.max((dp[depth - 1] + 1 || 0) + dir[i].length - depth, max);
    } else {
      dp[depth] = dir[i].length - depth + (dp[depth - 1] + 1 || 0);
    }
  }

  return max;
};

// time:  O(n)
// space: O(n)

// 'a'
// 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'
// 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
