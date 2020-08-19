/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  if (!root) return 0; 
    
  function DFS(node) {
    let notStole = 0, stole = node.val;
      
    if (node.left) {
      const [a, b] = DFS(node.left);
        
      notStole += a;
      stole += b;  
    }
     
    if (node.right) {
      const [a, b] = DFS(node.right);
        
      notStole += a;
      stole += b;  
    }
      
    return [Math.max(notStole, stole), notStole];  
  }
   
  return Math.max(...DFS(root));
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 2, 3]
// [4, 1, null, 2, null, 3]
// [3, 4, 5, 1, 3, null, 1]
// [3, 2, 3, null, 3, null, 1]
