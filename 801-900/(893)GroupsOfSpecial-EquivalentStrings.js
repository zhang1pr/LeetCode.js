/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
  const set = new Set();

  for (const s of words) {
    const odd = new Array(26).fill(0);
    const even = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
      const index = s[i].charCodeAt(0) - 97;

      if (i % 2 == 1) {
        odd[index]++;
      } else {
        even[index]++;
      }
    }

    const str = odd.join(',') + ',' + even.join(',');

    set.add(str);
  }

  return set.size;
};

// time:  O(n*wordLen)
// space: O(n*wordLen)

// ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
// ['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx']
