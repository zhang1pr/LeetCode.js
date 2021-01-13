/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  if (strs.length == 0) {
    return String.fromCharCode(258);
  }

  const char = String.fromCharCode(257);

  return strs.join(char);
};

// time:  O(n)
// space: O(1)

/**
* Decodes a single string to a list of strings.
*
* @param {string} s
* @return {string[]}
*/
var decode = function(s) {
  if (s == String.fromCharCode(258)) {
    return [];
  }

  const char = String.fromCharCode(257);

  return s.split(char);
};

// time:  O(n)
// space: O(1)

/**
* Your functions will be called as such:
* decode(encode(strs));
*/

// []
// ['']
// ['Hello', 'World']
