/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  if (buildings.length == 0){
    return [];
  }

  function merge(buildings, start, end) {
    const result = [];
    
    if (start == end) {
      result.push([buildings[start][0], buildings[start][2]]);
      result.push([buildings[start][1], 0])
      return result;
    }

    let mid = (start + end) >>> 1;
    const skyline1 = merge(buildings, start, mid);
    const skyline2 = merge(buildings, mid + 1, end);

    let h1 = 0;
    let h2 = 0;
    let i = 0;
    let j = 0;
    while (i < skyline1.length || j < skyline2.length) {
      const x1 = i < skyline1.length ? skyline1[i][0] : Infinity;
      const x2 = j < skyline2.length ? skyline2[j][0] : Infinity;
      let x = 0;
      
      if (x1 < x2) {
        h1 = skyline1[i][1];
        x = x1;
        i++;
      } else if (x1 > x2) {
        h2 = skyline2[j][1];
        x = x2;
        j++;
      } else {
        h1 = skyline1[i][1];
        h2 = skyline2[j][1];
        x = x1;
        i++;
        j++;
      }

      const height = Math.max(h1, h2);
      if (result.length == 0 || height != result[result.length - 1][1]) {
        result.push([x, height]);
      }
    }

    return result;
  };
  
  return merge(buildings, 0, buildings.length - 1);
}

// time:  O(nlog(n))
// space: O(1)

// [[2, 9, 10], [3, 7, 8]]
// [[2, 9, 10], [3, 7, 10]]
// [[2, 9, 10], [3, 11, 15]]
// [[2, 9, 10], [3, 11, 8]]
// [[2, 9, 10], [3, 11, 10]]
// [[2, 9, 10], [3, 11, 15]]
// [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]
