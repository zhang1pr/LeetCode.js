/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  const vowels = new Set('aeiouAEIOU');

  let res = '';
  let i = 0;

  for (const w of sentence.split(' ')) {
    res += ' ' + (vowels.has(w[0]) ? w : w.slice(1) + w[0]) + 'ma';
    i++;

    res += 'a'.repeat(i);
  };

  return res.slice(1);
};

// time:  O(n+wordLen^2)
// space: O(n)

// 'I speak Goat Latin'
// 'The quick brown fox jumped over the lazy dog'
