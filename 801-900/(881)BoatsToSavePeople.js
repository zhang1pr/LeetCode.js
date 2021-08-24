/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  let ans = 0;

  while (i <= j) {
    ans++;

    if (people[i] + people[j] <= limit) {
      i++;
    }

    j--;
  }

  return ans;
};

// time:  O(nlog(n))
// space: O(1)

// [1, 2], 3
// [3, 2, 2, 1], 3
// [3, 5, 3, 4], 5
