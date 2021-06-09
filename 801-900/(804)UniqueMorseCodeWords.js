/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const arr = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];

  const seen = new Set();
  for (const word of words) {
    let code = '';

    for (const ch of word) {
      code += arr[ch.charCodeAt(0) - 97];
    }

    seen.add(code.toString());
  }

  return seen.size;
};

// time:  O(n*strLen)
// space: O(n*strLen)

// ['a']
// ['a', 'a', 'b']
// ['gin', 'zen', 'gig', 'msg']
