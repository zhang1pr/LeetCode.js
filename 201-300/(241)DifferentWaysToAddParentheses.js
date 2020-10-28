/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const numList = [];
  const opList = [];
  let num = 0;

  for (let i = 0; i < input.length; i++) {
    if (['*', '+', '-'].includes(input[i])) {
      numList.push(num);
      num = 0;
      opList.push(input[i]);
      continue;
    }

    num = num * 10 + parseInt(input[i], 10);
  }

  numList.push(num);
  N = numList.length;

  const dp = Array(N).fill(0).map(() => Array(N));
  for (let i = 0; i < N; i++) {
    dp[i][i] = [numList[i]];
  }

  for (let n = 2; n <= N; n++) {
    for (let i = 0; i < N; i++) {
      let j = i + n - 1;

      if (j >= N) {
        break;
      }

      const res = [];
      for (s = i; s < j; s++) {
        const res1 = dp[i][s];
        const res2 = dp[s + 1][j];

        for (let x = 0; x < res1.length; x++) {
          for (let y = 0; y < res2.length; y++) {
            op = opList[s];
            res.push(caculate(res1[x], op, res2[y]));
          }
        }
      }

      dp[i][j] = res;
    }
  }

  return dp[0][N - 1];
};

var caculate = function(num1, c, num2) {
  switch (c) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

// time:  O(n)
// space: O(n)

// '1'
// '1-1'
// '2-1-1'
// '2*3-4*5'
