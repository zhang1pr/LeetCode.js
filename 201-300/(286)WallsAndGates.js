/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  const R=rooms.length, C=rooms[0].length;
  let q = [];
  let dir = [[1,0],[0,1],[-1,0],[0,-1]];
  const INF = 2147483647;
  
  for (let r=0;r<R;r++)
    for (let c=0;c<C;c++)
      if (rooms[r][c] == 0)
        q.push([r,c]);  
     
  let d = 0;
  while (q.length) {
    const nq = [];
    d++;
    for (let [r,c] of q) {
      for (let [dr,dc] of dir) {
        let nr=r+dr, nc=c+dc;

        if (nr < 0 || nr >= R || nc < 0 || nc >= C || rooms[nr][nc] != INF) continue;
        rooms[nr][nc] = d;
        nq.push([nr,nc]);
      }
    }

    q = nq;
  }      
};

// time:  O(m^2*n^2)
// space: O(mn)

// [[0]]
// [[-1]]
// [[2147483647]]
// [[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]]
