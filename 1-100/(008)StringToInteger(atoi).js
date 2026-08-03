/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(s) {
  if (!s) return 0;
  
  const upperBound = 2 ** 31 - 1;
  const lowerBound = -(2 ** 31);
  
  let i = 0;
  const N = s.length;
  
  while (i < N && s[i] == ' ') {
    i++;
  }
  
  if (i == N) return 0;
  
  let sign = 1;
  if (s[i] === '+') {
    i++;
  } else if (s[i] === '-') {
    sign = -1;
    i++;
  }
  
  let res = 0;
  while (i < N && s[i] >= '0' && s[i] <= '9') {
    const digit = parseInt(s[i]);
    res = res * 10 + digit;
    
    if (sign * res <= lowerBound) {
      return lowerBound;
    }

    if (sign * res >= upperBound) {
      return upperBound;
    }
    
    i++;
  }
  
  return res * sign;    
};

// time:  O(log(n))
// space: O(1)

// '42'
// '-42'
// '1337c0d3'
// '0-1'
// 'words and 987'