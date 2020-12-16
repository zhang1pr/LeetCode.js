/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  const num = Number(n);
  const len = n.length;

  if (num <= 10 || num % 10 == 0 && parseInt(n.slice(1), 10) == 0) {
    return (num - 1).toString();
  }

  if (num == 11 || num % 10 == 1 && n[0] == '1' && parseInt(n.slice(1, len - 1), 10) == 0) {
    return (num - 2).toString();
  }

  if (isAllNine(n)) {
    return (num + 2).toString();
  }

  const isEven = len % 2 == 0;

  const root = Number(isEven ? n.slice(0, Math.floor(len / 2)) : n.slice(0, Math.floor(len / 2) + 1));
  const equal = toPalindrome(root.toString(), isEven);
  const diffE = Math.abs(num - Number(equal));

  const bigger = toPalindrome((root + 1).toString(), isEven);
  const diffB = Math.abs(num -  Number(bigger));

  const smaller = toPalindrome((root - 1).toString(), isEven);
  const diffS = Math.abs(num - Number(smaller));

  let closest = (diffB < diffS) ? bigger : smaller;
  const minDiff = Math.min(diffB, diffS);

  if (diffE != 0) {
    if (diffE == minDiff) {
      closest = (Math.min(Number(equal), Number(closest))).toString();
    } else if (diffE < minDiff) {
      closest = equal;
    }
  }

  return closest;
};

var toPalindrome = function(num, isEven) {
  const revNum = [...num].reverse().join('');
  return isEven ? num + revNum : num + revNum.slice(1);;
};

var isAllNine = function(num) {
  for (const char of num) {
    if (char != '9') {
      return false;
    }
  }

  return true;
};

// time:  O(n)
// space: O(n)

// '1'
// '2'
// '8'
// '9'
// '10'
// '11'
// '99'
// '100'
// '111'
// '123'
// '12321'
// '123321'
// '807045053224792883'
