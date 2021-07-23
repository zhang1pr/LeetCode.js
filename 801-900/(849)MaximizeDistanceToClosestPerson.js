/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const N = seats.length;
  let prev = -1;
  let future = 0;
  let ans = 0;

  for (let i = 0; i < N; ++i) {
    if (seats[i] == 1) {
      prev = i;
    } else {
      while (future < N && seats[future] == 0 || future < i) {
        future++;
      }

      const left = prev == -1 ? N : i - prev;
      const right = future == N ? N : future - i;
      ans = Math.max(ans, Math.min(left, right));
    }
  }

  return ans;
};

// time:  O(n)
// space: O(1)

// [0, 1]
// [1, 0]
// [1, 0, 0, 0]
// [1, 0, 0, 0, 1, 0, 1]
