/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
  let start = 0;
  sentence = sentence.join(' ') + ' ';
  const len = sentence.length;

  for (let i = 0; i < rows; i++) {
    start += cols;

    while (start >= 0 && sentence[start % len] != ' ') {
      start--;
    }

    start++;
  }

  return Math.floor(start / len);
}

// time:  O(row*wordLen)
// space: O(1)

// ['a', 'bcd', 'e'], 3, 6
// ['hello', 'world'], 2, 8
// ['I', 'had', 'apple', 'pie'], 4, 5
