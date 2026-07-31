var abbreviate = function (word) {
  if (word.length <= 2) {
    return word;
	}

  return [word[0], word.length - 2, word.at(-1)].join('');
}

/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
  this.map = new Map();

	for (const word of dictionary) {
		const key = abbreviate(word);
		const set = this.map.get(key) || new Set();

    if (set.size < 2) {
		  set.add(word);
    }
    
		this.map.set(key, set);
	}
};

// time:  O(mn)
// space: O(n)

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
  const key = abbreviate(word);
  const set = this.map.get(key);
  return set == null || set.has(word) && set.size == 1;
};

// time:  O(n)
// space: O(1)

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */

// ["ValidWordAbbr", "isUnique", "isUnique", "isUnique", "isUnique", "isUnique"]
// [[["deer", "door", "cake", "card"]], ["dear"], ["cart"], ["cane"], ["make"], ["cake"]]