/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
  const num = BigInt(n);
  const len = n.length;

  if (num <= 10n || n[0] == '1' && /^0+$/.test(n.slice(1))) {
    return (num - 1n).toString();
  }

  if (num == 11n || num % 10n == 1n && n[0] == '1' && /^0+$/.test(n.slice(1, len - 1))) {
    return (num - 2n).toString();
  }

  if (isAllNine(n)) {
    return (num + 2n).toString();
  }

  const isEven = len % 2 == 0;

  const root = BigInt(isEven ? n.slice(0, Math.floor(len / 2)) : n.slice(0, Math.floor(len / 2) + 1));
  const equal = toPalindrome(root.toString(), isEven);
  const diffE = abs(num - BigInt(equal));

  const bigger = toPalindrome((root + 1n).toString(), isEven);
  const diffB = abs(num - BigInt(bigger));

  const smaller = toPalindrome((root - 1n).toString(), isEven);
  const diffS = abs(num - BigInt(smaller));

  let closest = (diffB < diffS) ? bigger : smaller;
  const minDiff = diffB < diffS ? diffB : diffS;

  if (diffE != 0n) {
    if (diffE == minDiff) {
      closest = (BigInt(equal) < BigInt(closest) ? equal : closest);
    } else if (diffE < minDiff) {
      closest = equal;
    }
  }

  return closest;
};

var toPalindrome = function(num, isEven) {
  const revNum = [...num].reverse().join('');
  return isEven ? num + revNum : num + revNum.slice(1);
};

var isAllNine = function(num) {
  for (const char of num) {
    if (char != '9') {
      return false;
    }
  }

  return true;
};

var abs = function(x) {
  return x < 0n ? -x : x;
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
