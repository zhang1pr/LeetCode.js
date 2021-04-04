/**
 * @param {string[]} source
 * @return {string[]}
 */
 var removeComments = function(source) {
  let inBlock = false;
  let newline = '';
  const res = [];

  for (const line of source) {
    let i = 0;
    if (!inBlock) {
      newline = '';
    }

    while (i < line.length) {
      if (!inBlock && i + 1 < line.length && line[i] == '/' && line[i + 1] == '*') {
        inBlock = true;
        i++;
      } else if (inBlock && i + 1 < line.length && line[i] == '*' && line[i + 1] == '/') {
        inBlock = false;
        i++;
      } else if (!inBlock && i + 1 < line.length && line[i] == '/' && line[i + 1] == '/') {
        break;
      } else if (!inBlock) {
        newline += line[i];
      }

      i++;
    }

    if (!inBlock && newline.length > 0) {
      res.push(newline);
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// ['a/*comment', 'line', 'more_comment*/b']
// ['/*Test program */', 'int main()', '{ ', '  // variable declaration ', 'int a, b, c;', '/* This is a test', '   multiline  ', '   comment for ', '   testing */', 'a = b + c;', '}']
