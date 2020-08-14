/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = [...new Array(n)].map(() => new Array(n).fill(0));
    
  let a = 0;
  let b = n - 1;
  let no = 1; 
    
  while (a <= b) {
    for (let i = a; i <= b; i++) {
      matrix[a][i] = no;      
      no++;    
    }
      
    for (let i = a + 1; i <= b; i++) {
      matrix[i][b] = no;  
      no++;  
    }
      
    if (a < b) {
      for (let i = b - 1; i >= a; i--) {
        m[b][i] = no;               
        no++;    
      }
      
      for (let i = b - 1; i >= a + 1; i--) {
        m[i][a] = no;
        no++;
      }
    }
      
    a++;
    b--;  
  }  
    
  return m;  
};

// time:  O(n)
// space: O(1)

// test cases:
// 0
// 1
// 2
// 3
