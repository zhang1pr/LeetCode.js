/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
  let index1 = -1;
  let index2 = -1;
  let result = words.length - 1;
  
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      if (words[index1] === word1 && word1 === word2) {
        index2 = index1;
      }

      index1 = i;
    } else if (words[i] === word2) {
      index2 = i;
    }
  
    if (index1 != -1 && index2 != -1) {
      result = Math.min(result, Math.abs(index1 - index2));
    }
  }
};

// time:  O(n)
// space: O(1)

// ['practice', 'coding'], 'coding', 'practice'
// ['practice', 'practice'], 'practice', 'practice'
// ['practice', 'makes', 'perfect', 'coding', 'makes'], 'coding', 'practice'
// ['practice', 'makes', 'perfect', 'coding', 'makes'], 'makes', 'coding'
// ['practice', 'makes', 'perfect', 'coding', 'makes'], 'makes', 'makes'
