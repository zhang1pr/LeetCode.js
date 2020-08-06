/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  if (words.length == 0) {
    return 0;
  }  

  const len = words.length;
  const value = new Array(len).fill(0);
  let temp;
  
  for (let i = 0; i < len; i++) {
    temp = words[i];
    
		for (let j = 0; j < temp.length; j++) {
			value[i] |= 1 << (temp[j].charCodeAt(0) - 97);
		}
  }
  
	let res = 0;
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			if ((value[i] & value[j]) == 0) {
				res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }

	return res;  
};

// time:  O(n^2)
// space: O(n)

// ['a', 'aa', 'aaa', 'aaaa']
// ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']
// ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']
