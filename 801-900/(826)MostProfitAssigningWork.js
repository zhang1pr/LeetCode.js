/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  const N = difficulty.length;
  const jobs = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    jobs[i] = [difficulty[i], profit[i]];
  }

  jobs.sort((a, b) => a[0] - b[0]);
  worker.sort((a, b) => a - b);

  let ans = 0;
  let i = 0;
  let best = 0;
  for (const skill of worker) {
    while (i < N && skill >= jobs[i][0]) {
      best = Math.max(best, jobs[i][1]);
      i++;
    }

    ans += best;
  }

  return ans;
};

// time:  O(nlogn+mlogm)
// space: O(n+m)

// [2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]
