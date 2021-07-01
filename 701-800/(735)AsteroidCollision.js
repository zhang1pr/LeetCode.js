/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (const item of asteroids) {
    let flag = true;

    while (stack.length && item < 0 && 0 < stack[stack.length - 1]) {
      if (stack[stack.length - 1] < -item) {
        stack.pop();
        continue;
      } else if (stack[stack.length - 1] == -item) {
        stack.pop();
      }

      flag = false;
      break;
    }

    if (flag) {
      stack.push(item);
    }
  }

  return stack;
};

// time:  O(n)
// space: O(n)

// [8, -8]
// [5, 10, -5]
// [10, 2, -5]
// [-2, -1, 1, 2]
