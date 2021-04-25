/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let begin = new Set().add('0000');
  let end = new Set().add(target);
  const dead = new Set(deadends);
  let res = 0;
  let set;

  while (begin.size && end.size) {
    if (begin.size > end.size) {
      [begin, end] = [end, begin];
    }

    set = new Set();
    for (const s of begin) {
      if (end.has(s)) {
        return res;
      }

      if (dead.has(s)) {
        continue;
      }

      dead.add(s);

      for (let i = 0; i < 4; i++) {
        const ch = s[i];
        const s1 = s.slice(0, i) + (ch == '9' ? 0 : Number(ch) + 1) + s.slice(i + 1);
        const s2 = s.slice(0, i) + (ch == '0' ? 9 : Number(ch) - 1) + s.slice(i + 1);

        if (!dead.has(s1)) {
          set.add(s1);
        }

        if (!dead.has(s2)) {
          set.add(s2);
        }
      }
    }

    res++;
    begin = set;
  }

  return -1;
};

// time:  O(1)
// space: O(1)

// ['8888'], '0009'
// ['0000'], '8888'
// ['0201', '0101', '0102', '1212', '2002'], '0202'
// ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888'
