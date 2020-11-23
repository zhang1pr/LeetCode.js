/**
 * @param {string[]} dict
 * @return {string[]}
 */
var wordsAbbreviation = function(dict) {
  const res = [];
  const len = Array(dict.length).fill(1);

  for (let i = 0; i < dict.length; i++) {
    res[i] = abbreviate(dict[i], 1);
  }

  for (let i = 0; i < dict.length; i++) {
    while (true) {
      const set = new Set();
      for (let j = i + 1; j < dict.length; j++) {
        if (res[i] == res[j]) {
          set.add(j);
        }
      }

      if (set.size == 0) {
        break;
      }

      set.add(i);

      for (const val of set.values()) {
        len[val]++;
        res[val] = abbreviate(dict[val], len[val]);
      }
    }
  }

  return res;
}

function abbreviate(s, len) {
  if (len >= s.length - 2) {
    return s;
  }

  let str = s.slice(0, len);
  str += (s.length - 1 - len).toString();
  str += s[s.length - 1];

  return str;
}

// time:  O(n^2*sLen)
// space: O(n+sLen)

// ['like', 'god', 'internal', 'me', 'internet', 'interval', 'intension', 'face', 'intrusion']
