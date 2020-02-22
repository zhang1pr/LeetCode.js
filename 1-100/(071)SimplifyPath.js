/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  path = path.split('/');

  for (let i = 0; i < path.length; i++) {
    if (path[i] == '..') {
      stack.pop();
    } else if (path[i] != '.' && path[i] != '') {
      stack.push(path[i]);
    }
  }

  return '/' + stack.join('/');
};

// time:  O(n)
// space: O(n)

// '/'
// '/.'
// '/..'
// '/...'
// '/....'
// '/home/'
// '/a//b///c/d//././/..'
