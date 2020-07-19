/**
 * @param {number} num
 * @return {string}
 */
var romanToInt = function(num) {
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D','M'];
  const values = [1, 5, 10, 50, 100, 500, 1000];
  let result = 0;
  let lastIndex;

  for (let i = num.length - 1; i >= 0; i--) {
    const symbol = num[i];
    const index = symbols.indexOf(symbol);
    const value = values[index];

    if (lastIndex > index) {
      lastIndex = 0;
      result -= value;
    } else {
      lastIndex = index;
      result += value;
    }
  }

  return result;
};

// time:  O(n)
// space: O(1)

// test cases:
// 'II'
// 'IV'
// 'IX'
// 'LVIII'
// 'MCMXCIV'
