/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => new Array());
  const visited = new Array(numCourses).fill(false);
    
  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  function DFS(c) {
    if (visited[c]) {
      return false;
    }
    visited[c] = true;
      
    for (let i = 0; i < graph[c].length; i++) {
      if (!DFS(graph[c][i])) {
        return false;
      }
    }
    visited[c] = false;
    return true;
  }
    
  for (let i = 0; i < numCourses; i++) {
    if (!DFS(i)) {
      return false;  
    }
  }
    
  return true;
};

// time:  O(v+e)
// space: O(v+e)

// 1, []
// 2, []
// 2, [[1, 0]]
// 2, [[1, 0], [0, 1]]
// 3, [[1, 0], [2, 1], [2, 0]]
