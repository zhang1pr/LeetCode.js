/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  const n = board.length;
  const map = new Map().set(1, 0);

  let q  = [1];
  while (q.length) {
    const nq = [];
    
    for (const x of q) {
      for (let step = 1; step <= 6; step++) {
        let i = x + step;
        const a = Math.floor((i - 1) / n), b = (i - 1) % n;
        const r = n - 1 - a, c = a % 2 == 0 ? b : n - 1 - b;
        let next = board[r][c];
        
        if (next > 0) {
          i = next;
        }
        
        if (i == n * n) {
          return map.get(x) + 1;
        }
       
        if (!map.has(i)) {
          map.set(i, (map.get(x) || 0) + 1);
          nq.push(i)
        }
      }
    }

    q = nq;
  }
          
  return -1;
};

// time:  O(n^2)
// space: O(n^2)

// [[-1, -1], [-1, 3]]
// [[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, 35, -1, -1, 13, -1], [-1, -1, -1, -1, -1, -1], [-1, 15, -1, -1, -1, -1]]