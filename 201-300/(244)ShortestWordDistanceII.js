/**
 * @constructor
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.positions = {};
  
  for (const word of words) {
    this.positions[word] = this.positions[word] || [];
    this.positions[word].push(i);
  }
};

/**
* @param {string} word1
* @param {string} word2
* @return {integer}
*/
WordDistance.prototype.shortest = function(word1, word2) {
  let i = 0;
  let j = 0;
  let dist = Infinity;
  let pos1 = this.positions[word1];
  let pos2 = this.positions[word2];
  
  while (i < pos1.length && j < pos2.length) {
    let i1 = pos1[i];
    let i2 = pos2[j];
    
    dist = Math.min(dist, Math.abs(i1 - i2));
    
    if (i1 < i2) {
      i++;
    } else {
      j++;
    }
  }
  
  return dist;
};

/**
* Your WordDistance object will be instantiated and called as such:
* var wordDistance = new WordDistance(words);
* wordDistance.shortest("word1", "word2");
* wordDistance.shortest("anotherWord1", "anotherWord2");
*/

// time:  O(n)
// space: O(n)

// ['WordDistance', 'shortest', 'shortest'], [[['practice', 'makes', 'perfect', 'coding', 'makes']], ['coding', 'practice'], ['makes', 'coding']]
