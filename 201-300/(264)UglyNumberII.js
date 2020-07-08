/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const ugly = [1];
  let index2 = 0;
  let index3 = 0;
  let index5 = 0;
  let factor2;
  let factor3;
  let factor5;
  let min;
  
  for (let i = 1; i < n; i++) {
    factor2 = 2 * ugly[index2];
    factor3 = 3 * ugly[index3];
    factor5 = 5 * ugly[index5];
    min = Math.min(factor2, factor3, factor5);
    ugly[i] = min;

    if (factor2 == min) {
      index2++;
    }

    if (factor3 == min) {
      index3++;
    }
    
    if (factor5 == min) {
      index5++;
    }
  }
  
  return ugly[n - 1];
};


// time:  O(log(n))
// space: O(1)

// 1
// 2
// 6
// 8
// 10
// 14
