/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  const res = [];
  
  if (root === null) {
    return res;
  }
  
  const map = {};
  const queue = [[root, 0]];
  let min = Infinity;
  let max = -Infinity;
  
  while (queue.length) {
    const len = queue.length;
    
    for (let i = 0; i < len; i++) {
      const pair = queue.shift();
      const node = pair[0];
      const index = pair[1];
      
      map[index] = map[index] || [];
      map[index].push(node.val);
      
      min = Math.min(index, min);
      max = Math.max(index, max);
      
      if (node.left) {
        queue.push([node.left, index - 1]);
      }
      
      if (node.right) {
        queue.push([node.right, index + 1]);
      }
    }
  }
  
  while(min <= max) {
    if (map[min].length) {
      res.push(map[min]);
    }

    min++;
  }
  
  return res;
};

// time:  O(n)
// space: O(n)

// [3, 9, 8, 4, 0, 1, 7]
// [3, 9, 20, null, null, 15, 7]
// [3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5]
