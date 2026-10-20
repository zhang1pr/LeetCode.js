/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  const map = new Map();
  let res = 0, i = 0;

  for (let j = 0; j < fruits.length; j++) {
    map.set(fruits[j], (map.get(fruits[j]) || 0) + 1);
   
    while (map.size > 2) {
      map.set(fruits[i], map.get(fruits[i]) - 1);
      
      if (map.get(fruits[i]) == 0) {
        map.delete(fruits[i]);
      }
      
      i++;
    }
    
    res = Math.max(res, j - i + 1);
  }

  return res;  
};

// time:  O(n)
// space: O(1)

// [1, 2, 1]
// [0, 1, 2, 2]
// [1, 2, 3, 2, 2]