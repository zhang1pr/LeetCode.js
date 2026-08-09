/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = [...Array(numCourses)].map(() => []);
  const indegree = Array(numCourses).fill(0);
  let visited = 0;

  for (const [course, dependancy] of prerequisites) {
    graph[dependancy].push(course);
    indegree[course]++;   
  }

  let queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] == 0) {
      queue.push(i);
      visited++;
    }
  }
  
  while (queue.length > 0) {
    let nqueue = [];

    for (const node of queue) {
      for (const nei of graph[node]) {
        indegree[nei]--;
        if (indegree[nei] == 0) {
          nqueue.push(nei);
          visited++;
        }
      }
    }

    queue = nqueue;
  }
  
  return visited == numCourses;
};

// time:  O(v+e)
// space: O(v+e)

// 1, []
// 2, []
// 2, [[1, 0]]
// 2, [[1, 0], [0, 1]]
// 3, [[1, 0], [2, 1], [2, 0]]
