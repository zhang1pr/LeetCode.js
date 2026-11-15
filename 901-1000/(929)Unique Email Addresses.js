/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  return new Set(emails.map(email => {
    const [local, domain] = email.split('@');
    return local.split('+').shift().split('.').join('') + '@' + domain;
  })).size;
};

// time:  O(n)
// space: O(n)

// ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']
// ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com']
