/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var rectangleArea = function(rectangles) {
  const MOD = 1e9 + 7;
  const N = rectangles.length;
  const xs = Array(N * 2).fill(0);
  const ys = Array(N * 2).fill(0);

  for (let i = 0; i < N; i++) {
    xs[i * 2 + 0] = rectangles[i][0];
    ys[i * 2 + 0] = rectangles[i][1];
    xs[i * 2 + 1] = rectangles[i][2];
    ys[i * 2 + 1] = rectangles[i][3];
  }

  xs.sort((a, b) => a - b);
  ys.sort((a, b) => a - b);

  let xsize = 0;
  let ysize = 0;

  for (let i = 0; i < 2 * N; i++) {
    if (i == 0 || xs[i] != xs[i - 1]) {
      xs[xsize] = xs[i];
      xsize++;
    }
  }

  for (let i = 0; i < 2 * N; i++) {
    if (i == 0 || ys[i] != ys[i - 1]) {
      ys[ysize] = ys[i];
      ysize++;
    }
  }

  let res = 0;
  for (let i = 0; i + 1 < xsize; i++) {
    for (let j = 0; j + 1 < ysize; j++) {
      const x0 = xs[i];
      const x1 = xs[i + 1];
      const y0 = ys[j];
      const y1 = ys[j + 1];

      for (let k = 0; k < N; k++) {
        const [a, b, c, d] = rectangles[k];

        if (a <= x0 && x1 <= c && b <= y0 && y1 <= d) {
          res += (x1 - x0) * (y1 - y0);
          res %= MOD;
          break;
        }
      }
    }
  }

  return res;
};

// time:  O(n^3)
// space: O(n^2)

// [[0, 0, 1, 1]]
// [[0, 0, 1000000000, 1000000000]]
// [[0, 0, 2, 2], [1, 0, 2, 3], [1, 0, 3, 1]]
