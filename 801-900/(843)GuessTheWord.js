/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
  function getMatches(word1, word2) {
    let matches = 0;

    for (let i = 0; i < word1.length; i++) {
      if (word1[i] == word2[i]) {
        matches++;
      }
    }

    return matches;
  }

  let matches = 0;
  for (let i = 0; i < 10 && matches != 6; i++) {
    const index = Math.floor(Math.random() * wordlist.length);
    const guess = wordlist[index];
    matches = master.guess(guess);

    const arr = [];
    for (const word of wordlist) {
      if (matches == getMatches(guess, word)) {
        arr.push(word);
      }
    }

    wordlist = arr;
  }
};

// time:  O(n)
// space: O(n)

// 'hamada', ['hamada', 'khaled'], 10
// 'acckzz', ['acckzz', 'ccbazz', 'eiowzz', 'abcczz'], 10
