/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = Array(numCourses).fill(0).map(() => Array());
  const visited = Array(numCourses).fill(false);
  const res = [];
  const set = new Set();

  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][0]].push(prerequisites[i][1]);
  }

  function DFS(c, stack) {
    if (visited[c]) {
      return false;
    } else if (set.has(c)) {
      return true;
    } else {
      stack.push(c);
      visited[c] = true;
    }

    for (let i = 0; i < graph[c].length; i++) {
      if (!DFS(graph[c][i], stack)) {
        return false;
      }
    }
    visited[c] = false;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (set.has(i)) {
      continue;
    }

    const stack = [];

    if (!DFS(i, stack)) {
      return [];
    }

    let temp;
    while (stack.length != 0) {
      temp = stack.pop();

      if (!set.has(temp)) {
        res.push(temp);
        set.add(temp);
      }
    }
  }

  return res;
};

// time:  O(v+e)
// space: O(v+e)

// 1, []
// 2, []
// 2, [[1, 0]]
// 2, [[1, 0], [0, 1]]
// 3, [[1, 0], [2, 1], [2, 0]]
// 4, [[1, 0], [2, 0], [3, 1], [3, 2]]
