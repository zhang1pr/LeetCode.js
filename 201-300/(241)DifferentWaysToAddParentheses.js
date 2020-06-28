/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const numList = [];
  const opList = [];
  const array = [...input]
  let num = 0;
  for (const item of array) {
    if (['*', '+', '-'].includes(item)) {
      numList.push(num);
      num = 0;
      opList.push(array[i]);
      continue;
    }
    
    num = num * 10 + parseInt(array[i]);
  }
  
  numList.push(num);
  N = numList.length;

  const dp = new Array(N).fill(0).map(() => new Array(N));
  for (let i = 0; i < N; i++) {
    dp[i][i] = [numList[i]];
  }

  for (let n = 2; n <= N; n++) {
    for (let i = 0; i < N; i++) {
      let j = i + n - 1;
      
      if (j >= N) {
        break;
      }

      const result = [];
      for (s = i; s < j; s++) {
        const result1 = dp[i][s];
        const result2 = dp[s + 1][j];

        for (let x = 0; x < result1.length; x++) {
          for (let y = 0; y < result2.length; y++) {
            op = opList[s];
            result.push(caculate(result1[x], op, result2[y]));
          }
        }
      }

      dp[i][j] = result;
    }
  }

  return dp[0][N-1];
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
