/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  let count = 0;
  const arr = Array(N + 1).fill(0);

  function DFS(pos) {
    if (pos > N) {
      count++;
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (arr[i] == 0 && (i % pos == 0 || pos % i == 0)) {
        arr[i] = 1;
        DFS(pos + 1);
        arr[i] = 0;
      }
    }
  }

  DFS(1);
  return count;
};

// time:  O(n!)
// space: O(n)

// 1
// 2
// 3
// 10
// 15
