/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let i = 7;
  let j = 6;

  while (i > 6) {
    i = rand7();
  }

  while (j > 5) {
    j = rand7();
  }

  if (i % 2 === 0) {
    return j;
  } else {
    return j + 5;
  }
};

// time:  O(rand7)
// space: O(1)

// 1
// 2
// 3
