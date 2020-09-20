/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  if (bank.length == 0) {
    return -1;
  }

  const bankSet = new Set(bank);
  if (!bankSet.has(end)) {
    return -1;
  }

  const gene = ['A', 'C', 'G', 'T'];
  let set1 = new Set().add(start);
  let set2 = new Set().add(end);

  let count = 0;
  while (set1.size && set2.size) {
    if (set1.size > set2.size) {
      [set1, set2] = [set2, set1];
    }

    const temp = new Set();

    for (const word of set1) {
      const arr = [...word];

      for (let i = 0; i < arr.length; i++) {
        let old = arr[i];

        for (const char of gene) {
          if (char == old) {
            continue;
          }

          arr[i] = char;
          const target = arr.join('');

          if (set2.has(target)) {
            return count + 1;
          }

          if (bankSet.has(target)) {
            temp.add(target);
            bankSet.delete(target);
          }

          arr[i] = old;
        }
      }
    }

    count++;
    set1 = temp;
  }

  return -1;
};

// time:  O(4^(n/2))
// space: O(4^(n/2))

// 'AACCGGTT', 'AACCGGTA', ['AACCGGTA']
// 'AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']
// 'AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC']
