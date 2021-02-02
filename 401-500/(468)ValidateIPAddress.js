/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if (IP.length > 39) {
    return 'Neither';
  }

  const IPv4 = IP.split('.');
  const IPv6 = IP.split(':');

  if (IPv4.length == 4) {
    if (IPv4.every(isIPv4)) {
      return 'IPv4';
    }
  } else if (IPv6.length == 8) {
    if (IPv6.every(isIPv6)) {
      return 'IPv6';
    }
  }

  return 'Neither';
};

var isIPv4 = function(IP) {
  if (!(/^\d+$/.test(IP))) {
    return false;
  }

  if (IP.length >= 2 && IP[0] == '0') {
    return false;
  }

  if (Number(IP) > 255) {
    return false;
  }

  return true;
};

var isIPv6 = function(IP) {
  if (!(/^\w+$/.test(IP))) {
    return false;
  }

  if (IP.length > 4) {
    return false;
  }

  if(/[g-zG-Z]/.test(IP)) {
    return false;
  }

  return true;
};

// time:  O(1)
// space: O(1)

// '1e1.4.5.6'
// '01.01.01.01'
// '172.16.254.1'
// '256.256.256.256'
// '2001:0db8:85a3:0:0:8A2E:0370:7334'
// '2001:0db8:85a3:0:0:8A2E:0370:7334:'
