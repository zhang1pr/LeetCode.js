/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  let state = 0;
  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '+':
      case '-':
        switch (state) {
          case 0:
            state = 1;
            break;
          case 4:
            state = 6;
            break;
          default:
            return false;
        }
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        switch (state) {
          case 0:
          case 1:
          case 2:
            state = 2;
            break;
          case 3:
            state = 3;
            break;
          case 4:
          case 5:
          case 6:
            state = 5;
            break;
          case 7:
            state = 8;
            break;
          case 8:
            state = 8;
            break;
          default:
            return false;
        }
        break;
      case '.':
        switch (state) {
          case 0:
          case 1:
            state = 7;
            break;
          case 2:
            state = 3;
            break;
          default:
            return false;
        }
        break;
      case 'e':
        switch (state) {
          case 2:
          case 3:
          case 8:
            state = 4;
            break;
          default:
            return false;
        }
        break;
      default:
        return false;
    }
  }

  return [2, 3, 5, 8].includes(state);
};

// time:  O(n)
// space: O(1)

// ''
// '.'

// '0'
// '0.'
// '-0'
// '00'
// '.1'
// '-10'
// '123'
// '1a3'
// '2e0'
// '+.8'
// '00.5'
// '0123'
// ' 123 '
// '12 3'
// '     '
// '123e1'
// '123.5'
// '0.5e04'
// '1.23e10'
// '0.5e-10'
// '0.00000'
// '1.0e4.5'
// '-500.777'
// '0.0000001'
// '123.000000'
// ' 005047e+6'
