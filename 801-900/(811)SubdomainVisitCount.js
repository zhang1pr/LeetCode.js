/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const map = new Map();

  for (let domain of cpdomains) {
    const cpinfo = domain.split(' ');
    const frags = cpinfo[1].split('.');
    const cnt = Number(cpinfo[0]);

    let cur = '';
    for (let i = frags.length - 1; i >= 0; i--) {
      cur = frags[i] + (i < frags.length - 1 ? '.' : '') + cur;
      map.set(cur, (map.get(cur) || 0) + cnt);
    }
  }

  const ans = [];
  for (const [key, val] of map) {
    ans.push(val + ' ' + key);
  }

  return ans;
};

// time:  O(n*domainLen)
// space: O(n*domainLen)

// ['9001 discuss.leetcode.com']
// ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org']
