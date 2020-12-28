/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  const stack = [];

  let i = 0;
  while (i < code.length) {
    if (i > 0 && stack.length == 0) {
      return false;
    }

    if (code.startsWith('<![CDATA[', i)) {
      i = code.indexOf(']]>', i + 9);

      if (i < 0) {
        return false;
      }

      i += 3;
    } else if (code.startsWith('</', i)) {
      const j = i + 2;
      i = code.indexOf('>', j);

      if (i < 0 || i == j || i - j > 9) {
        return false;
      }

      for (let k = j; k < i; k++) {
        if (!/[A-Z]/.test(code[k])) {
          return false;
        }
      }

      const str = code.slice(j, i);
      i++;

      if (stack.length == 0 || stack.pop() != str) {
        return false;
      }
    } else if (code.startsWith('<', i)) {
      const j = i + 1;
      i = code.indexOf('>', j);

      if (i < 0 || i == j || i - j > 9) {
        return false;
      }

      for (let k = j; k < i; k++) {
        if (!/[A-Z]/.test(code[k])) {
          return false;
        }
      }

      const str = code.slice(j, i);
      i++;
      stack.push(str);
    } else {
      i++;
    }
  }

  return stack.length == 0;
};

// time:  O(n)
// space: O(n)

// "<A>  <B> </A>   </B>"
// "<DIV>  unmatched <  </DIV>"
// "<DIV>  div tag is not closed  <DIV>"
// "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"
// "<DIV>This is the first line <![CDATA[<div>]]></DIV>"
// "<DIV> closed tags with invalid tag name  <b>123</b> </DIV>"
// "<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>"
// "<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>"
