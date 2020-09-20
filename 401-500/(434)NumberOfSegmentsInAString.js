/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.split(' ').filter(Boolean).length;
};

// time:  O(n)
// space: O(n)

// ''
// 'Hello'
// 'Hello, my name is John'
// 'love live! mu'sic forever'
