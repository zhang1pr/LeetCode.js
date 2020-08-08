/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
    
  for (const str of strs) {
    const array = new Array(26).fill(0);
    
    for (const char of str) {
      array[char.charCodeAt(0) - 97]++;  
    }
      
    const string = array.join('#');
      
    if (map.has(string)) {
      map.get(string).push(str);
    } else {
      map.set(string, [str]);  
    } 
  }  
    
  return [...map.values()];    
};

// time:  O(n*maxLen(s))
// space: O(n*maxLen(s))

// test cases:
// ['a']
// ['a', 'aa', 'aaa']
// ['not', 'ton', 'ontz']
// ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
