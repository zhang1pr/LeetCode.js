/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let j = 0;
  let cur = chars[0];
  let counter = 0;

  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] == cur) {
      counter++;
    } else {
      chars[j] = cur;
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) {
          j++;
          chars[j] = s[k];
        }
      }

      j++;
      cur = chars[i];
      counter = 1;
    }
  }

  return j;
};

// time:  O(n)
// space: O(1)

// ['a']
// ['a', 'a', 'b', 'b', 'c', 'c', 'c']
// ['a', 'a', 'a', 'b', 'b', 'a', 'a']
// ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
