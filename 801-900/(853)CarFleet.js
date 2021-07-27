/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  const N = position.length;
  let res = 0;
  const cars = [...Array(N)].map(() => [0, 0]);

  for (let i = 0; i < N; i++) {
    cars[i] = [position[i], (target - position[i]) / speed[i]];
  }

  cars.sort((a, b) => a[0] - b[0]);
  let cur = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (cars[i][1] > cur) {
      cur = cars[i][1];
      res++;
    }
  }

  return res;
};

// time:  O(nlog(n))
// space: O(n)

// 10, [3], [3]
// 12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]
// 10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4]
