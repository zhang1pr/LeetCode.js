/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  const map = new Map();

  for (const string of strings) {
    let shift = '';

    for (let i = 0; i < string.length; i++) {
      shift += (string[i].charCodeAt(0) - string[0].charCodeAt(0) + 26) % 26;
      shift += ',';
    }

    if (map.has(shift)) {
      map.get(shift).push(string);
    } else {
      map.set(shift, [string]);
    }
  }

  return [...map.values()];
};

// time:  O(n)
// space: O(n)

// ['a']
// ['a', 'a']
// ['a', 'b', 'c']
// ['a', 'aa', 'aaa']
// ['az', 'ba', 'cb', 'ax', 'ay']
// ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']
