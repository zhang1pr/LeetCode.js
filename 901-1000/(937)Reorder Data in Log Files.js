/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const isDigit = (ch) => ch >= '0' && ch <= '9';

  logs.sort((s1, s2) => {
    const idx1 = s1.indexOf(' ');
    const idx2 = s2.indexOf(' ');

    const id1 = s1.slice(0, idx1);
    const content1 = s1.slice(idx1 + 1);

    const id2 = s2.slice(0, idx2);
    const content2 = s2.slice(idx2 + 1);

    const digit1 = isDigit(content1[0]);
    const digit2 = isDigit(content2[0]);

    if (!digit1 && !digit2) {
      if (content1 == content2) {
        return id1 < id2 ? -1 : id1 > id2 ? 1 : 0;
      }

      return content1 < content2 ? -1 : 1;
    }

    if (digit1 && digit2) {
      return 0;
    }

    return digit1 ? 1 : -1;
  });

  return logs;
};

// time:  O(mnlogn)
// space: O(n)

// ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo']
// ['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero']