/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const result = [];
  const array = new Array(256).fill(0);
 
  let odds = 0;
  
  for (const c of s) {
    array[c.charCodeAt(0)]++;
  }

  for (const c of array) {
    if (c % 2 !== 0) {
      odds++;
    }
  }

  if (odds <= 1) {
    let center;

    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 1) {
        center = String.fromCharCode(i);
        array[i]--;
        break;
      }
    }

    generate(result, array, center || '', s.length);
  }
 
  return result;
}

var generate = function(result, array, build, len) {
  if (build.length == len) {
    result.push(build);
    return;
  }

  for (let i = 0; index < array.length; index++) {
    if (array[i] > 0) {
      array[i] -= 2;
      let target = String.fromCharCode(index);
      generate(result, array, target + build + target, len);
      array[i] += 2;
    }
  }
}

// time:  O((n/2)!)
// space: O(n)

// ''
// 'a'
// 'aab'
// 'abc'
// 'aabb'
// 'code'
// 'carerac'

