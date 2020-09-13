/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const mapS = new Map();
  const mapT = new Map();

  let charS;
  let charT;
  for (let i = 0; i < s.length; i++) {
    charS = s[i];
    charT = t[i];

    if (mapS.get(charS) != mapT.get(charT)) {
      return false;
    } else if (!mapS.has(charS)) {
      mapS.set(charS, i + 1);
      mapT.set(charT, i + 1);
    }
  }

  return true;
};

// time:  O(n)
// space: O(n)

// 's', 't'
// 'sa', 'tt'
// 'sa', 'sa'
// 'sa', 'st'
// 'egg', 'add'
// 'foo', 'bar'
// 'paper', 'title'
