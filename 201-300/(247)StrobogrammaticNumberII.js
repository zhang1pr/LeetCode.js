/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  let list;

  if (n % 2 == 0) {
    list = [''];
  } else {
    list = ['0', '1', '8'];
  }

  for (let m = 2; m <= n; m += 2) {
    list = list.reduce((a, b) => {
      a.push('1' + b + '1');
      a.push('6' + b + '9');
      a.push('9' + b + '6');
      a.push('8' + b + '8');

      return a;
    }, []);
  }

  return list;
};

// time:  O(n)
// space: O(1)

// 0
// 1
// 2
// 3
// 4
// 5
