/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return [];
  }

  const mapping = [...digits].map(digit => {
    digit = Number(digit);
    let counter = digit == 7 || digit == 9 ? 4 : 3;
    let charCode = 97 + 3 * (digit - 2);

    if (digit > 7) {
      charCode++;
    }

    let letters = '';
    while (counter > 0) {
      counter--;
      letters += String.fromCharCode(charCode++);
    }

    return letters;
  });

  const result = [];

  function generatePermutation(index, lastResult) {
    for (const letter of mapping[index]) {
      if (index == 0) {
        result.push(letter + lastResult);
      } else {
        generatePermutation(index - 1, letter + lastResult);
      }
    }
  }

  generatePermutation(mapping.length - 1, '');

  return result;
};

// time:  O(3^m*4^n)
// space: O(3^m*4^n)

// test cases:
// ''
// '9'
// '23'
// '6789'
