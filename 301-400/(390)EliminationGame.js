/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let left = true;
  let remaining = n;
  let step = 1;
  let head = 1;

  while (remaining > 1) {
    if (left || remaining % 2 == 1) {
      head += step;
    }

    remaining = Math.floor(remaining / 2);
    step *= 2;
    left = !left;
  }

  return head;
};

// time:  O(log(n))
// space: O(1)

// 1
// 2
// 3
// 6
// 9
