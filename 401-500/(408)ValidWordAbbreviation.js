/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = (word, abbr) => {
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (word[i] == abbr[j]) {
      i++;
      j++;
      continue;
    }

    if (abbr[j] <= '0' || abbr[j] > '9') {
      return false
    }

    let start = j;
    while (j < abbr.length && abbr[j] >= '0' && abbr[j] <= '9') {
      j++;
    }

    let num = Number(abbr.slice(start, j));
    i += num;
  }

  return i == word.length && j == abbr.length;
}

// time:  O(n)
// space: O(1)

// 'apple', 'a2e'
// 'internationalization', 'i12iz4n'
