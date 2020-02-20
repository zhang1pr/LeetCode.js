/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const result = [];
  let currentLength = 0;
  let start = 0;
  let end = 0;
  let i = 0;
  let space;
  let diff;
  let temp;

  while (i < words.length) {
    if (
      !currentLength && currentLength + words[i].length <= maxWidth
      || currentLength + 1 + words[i].length <= maxWidth
    ) {
      end++;
      if (currentLength) {
        currentLength++;
      }
      currentLength += words[i].length;
      i++;
    } else {
      diff = end - start - 1;
      space = maxWidth - currentLength + diff;

      if (!diff) {
        result.push(words[start] + ' '.repeat(space));
      } else {
        temp = words[start];
        const average = Math.floor(space / diff);
        const left = space - average * diff;
        let blank = ' '.repeat(average + 1);

        let j = 0;
        while (j < left) {
          temp += blank + words[start+j+1];
          j++;
        }

        blank = ' '.repeat(average);
        while (j < diff) {
          temp += blank + words[start+j+1];
          j++;
        }

        result.push(temp);
      }

      start = end;
      currentLength = 0;
    }
  }

  temp = words[start];
  for (i = 1; i < end - start; i++) {
    temp += ' ' + words[start+i];
  }
  temp += ' '.repeat(maxWidth - currentLength);
  result.push(temp);

  return result;
};

// time:  O(n)
// space: O(1)

// test cases:
// ['OK!'], 4
// ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16
// ['What', 'must', 'be', 'acknowledgment', 'shall', 'be.'], 16
