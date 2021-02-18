/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipLights = function(n, m) {
  const set = new Set();

  for (let num = 0; num < 16; num++) {
    const [a, b, c, d] = [...num.toString(2).padStart(4,0)].map(a => Number(a));
    const sum = a + b + c + d;

    if (sum % 2 == m % 2 && sum <= m) {
      const arr = [];

      let light;

      for (let i = 0; i < Math.min(n, 3); i++) {
        light = 1;
        light ^= a;
        light ^= b && i % 2;
        light ^= c && i % 2 == 0;
        light ^= d && i % 3 == 0;

        arr.push(light);
      }

      set.add(arr.join(','));
    }
  }

  return set.size;
};
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipLights = function(n, m) {
  const set = new Set();

  for (let num = 0; num < 16; num++) {
    const [a, b, c, d] = [...num.toString(2).padStart(4, 0)].map(a => Number(a));
    const sum = a + b + c + d;

    if (sum % 2 == m % 2 && sum <= m) {
      const arr = [];

      let light;

      for (let i = 0; i < Math.min(n, 3); i++) {
        light = 1;
        light ^= a;
        light ^= b && i % 2;
        light ^= c && i % 2 == 0;
        light ^= d && i % 3 == 0;

        arr.push(light);
      }

      set.add(arr.join(','));
    }
  }

  return set.size;
};

// time:  O(1)
// space: O(1)

// 1, 1
// 2, 1
// 3, 1
