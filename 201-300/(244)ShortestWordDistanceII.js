/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.map = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!this.map.has(word)) {
      this.map.set(word, []);
    }

    this.map.get(word).push(i);
  }
};

// time:  O(n)
// space: O(n)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  let i = 0;
  let j = 0;
  let dist = Infinity;
  let pos1 = this.map.get(word1);
  let pos2 = this.map.get(word2);

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

// time:  O(n)
// space: O(1)

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */

// ['WordDistance', 'shortest', 'shortest'], [[['practice', 'makes', 'perfect', 'coding', 'makes']], ['coding', 'practice'], ['makes', 'coding']]
