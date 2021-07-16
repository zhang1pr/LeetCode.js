/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function(num) {
  const N = num.length;
  const MAX = 2 ** 31 - 1;

  for (let i = 0; i < Math.min(10, N); i++) {
    if (num[0] == '0' && i > 0) {
      break;
    }

    const a = Number(num.slice(0, i + 1));
    if (a >= MAX) {
      break;
    }

    for (let j = i + 1; j < Math.min(i + 10, N); j++) {
      if (num[i + 1] == '0' && j > i + 1) {
        break;
      }

      const b = Number(num.slice(i + 1, j + 1));
      if (b >= MAX) {
        break;
      }

      const fib = [a, b];

      let k = j + 1;
      let flag = false;
      while (k < N) {
        const nxt = fib[fib.length - 2] + fib[fib.length - 1];
        const strnxt = nxt.toString();

        if (nxt <= MAX && num.slice(k).startsWith(strnxt)) {
          k += strnxt.length;
          fib.push(nxt);
        } else {
          flag = true;
          break;
        }
      }

      if (flag) {
        continue;
      }

      if (fib.length >= 3) {
        return fib;
      }
    }
  }

  return [];
};

// time:  O(n^2)
// space: O(n)

// "0123"
// "1101111"
// "11235813"
// "112358130"
// "123456579"
