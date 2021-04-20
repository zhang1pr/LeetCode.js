/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let lo = 0;
  let hi = letters.length;

  while (lo < hi) {
    const mid = lo + hi >> 1;

    if (letters[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return letters[lo % letters.length];
};

// time:  O(log(n))
// space: O(1)

// ['c', 'f', 'j'], 'a'
// ['c', 'f', 'j'], 'c'
// ['c', 'f', 'j'], 'd'
// ['c', 'f', 'j'], 'g'
// ['c', 'f', 'j'], 'j'
// ['c', 'f', 'j'], 'k'
