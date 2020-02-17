/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  let state = 0;
  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
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

// '123'
// ' 123 '
// '0'
// '0123'
// '00'
// '-10'
// '-0'
// '123.5'
// '123.000000'
// '-500.777'
// '0.0000001'
// '0.00000'
// '0.'
// '00.5'
// '123e1'
// '1.23e10'
// '0.5e-10'
// '1.0e4.5'
// '0.5e04'
// '12 3'
// '1a3'
// ''
// '     '
// null
// '.1'
// '.'
// '2e0'
// '+.8'
// ' 005047e+6'
