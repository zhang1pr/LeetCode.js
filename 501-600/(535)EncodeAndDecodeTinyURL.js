/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  if (!this.arr) {
    this.arr = [];
  }

  this.arr.push(longUrl);
  return 'http://tinyurl.com/' + (this.arr.length - 1).toString();
};

// time:  O(1)
// space: O(1)

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const frags = shortUrl.split('/');
  return this.arr[frags[frags.length - 1]];
};

// time:  O(u)
// space: O(1)

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

// 'https://leetcode.com/problems/design-tinyurl'
