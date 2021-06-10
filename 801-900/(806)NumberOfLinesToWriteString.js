/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
  let lines = 1;
  let width = 0;
  for (const ch of s) {
    const w = widths[ch.charCodeAt(0) - 97]
    width += w;

    if (width > 100) {
      lines++;
      width = w;
    }
  }

  return [lines, width];
};

// time:  O(n)
// space: O(1)

// [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'bbbcccdddaaa'
// [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'abcdefghijklmnopqrstuvwxyz'
