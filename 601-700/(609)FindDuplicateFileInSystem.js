/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  const map = new Map();

  for (const text of paths) {
    const files = text.split(' ');

    for (let i = 1; i < files.length; i++) {
      const index = files[i].indexOf('(');
      const content = files[i].slice(index + 1, files[i].length - 1);

      if (!map.has(content)) {
        map.set(content, []);
      }

      map.get(content).push(files[0] + '/' + files[i].slice(0, index));
    }
  }

  return [...map.values()].filter(arr => arr.length > 1);
};

// time:  O(m+n)
// space: O(m+n)

// ['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)', 'root 4.txt(efgh)']
