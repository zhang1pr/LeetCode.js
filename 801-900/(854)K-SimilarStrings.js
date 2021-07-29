/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function(s1, s2) {
  function getNeighbours(s1, s2) {
    const res = [];
    const arr = [...s1];

    let i = 0;
    for (; i < arr.length; i++) {
      if (arr[i] != s2[i]) {
        break;
      }
    }

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] == s2[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        res.push(arr.join(''));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    return res;
  }

  let queue = [s1];
  const visited = new Set().add(s1);
  let level = 0;

  while (queue.length) {
    const newQueue = [];

    for (const curNode of queue) {
      if (curNode == s2) {
        return level;
      }

      for (const nei of getNeighbours(curNode, s2)) {
        if (!visited.has(nei)) {
          newQueue.push(nei);
          visited.add(nei);
        }
      }
    }

    level++;
    queue = newQueue;
  }

  return -1;
};

// time:  O(n*6^n)
// space: O(n*6^n)

// 'ab', 'ba'
// 'abc', 'bca'
// 'abac', 'baca'
