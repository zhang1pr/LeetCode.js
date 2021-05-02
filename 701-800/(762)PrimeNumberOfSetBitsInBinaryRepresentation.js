/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
 var countPrimeSetBits = function(L, R) {
  let res = 0;
  const arr = [2, 3, 5, 7, 11, 13, 17, 19];

  for (let x = L; x <= R; ++x) {
    const cnt = [...x.toString(2)].reduce((a, b) => Number(a) + Number(b));

    if (arr.includes(cnt)) {
      res++;
    }
  }

  return res;
};

// time:  O(log(R-L))
// space: O(log(R-L))

// 6, 10
// 10, 15
