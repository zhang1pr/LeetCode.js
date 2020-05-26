/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const set = new Set().add(n);
  let next;
    
  while (true) {
    next = getNext(n);
      
    if (next == 1) {
      return true;
    }
      
    if (set.has(next)) {
      return false;  
    } else {
      set.add(next);
      n = next;
    }
  }
};

var getNext = function(n) {
  let next = 0;
    
  while (n > 0) {
    let t = n % 10;
    next += t * t;
    n = (n - t) / 10;
  }
    
  return next;
}

// time:  O(n)
// space: O(n)

// 0
// 1
// 7
// 10
// 19
