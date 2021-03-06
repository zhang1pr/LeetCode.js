/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function(employees, id) {
  const map = new Map();

  function DFS(id) {
    const employee = map.get(id);
    let res = employee.importance;

    for (const subid of employee.subordinates) {
      res += DFS(subid);
    }

    return res;
  }

  for (const employee of employees) {
    map.set(employee.id, employee);
  }

  return DFS(id);
};

// time:  O(n)
// space: O(n)

// [[1, 1, []]]
// [[1, 2, [2]], [2, 3, []]]
// [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
