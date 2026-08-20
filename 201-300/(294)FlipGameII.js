/**
 * @param {string} currentState
 * @return {boolean}
 */
var canWin = function (currentState) {
  let states = currentState.split('');

  function DFS() {
    for (let i = 0; i < states.length - 1; i++) {
      if (states[i] === '+' && states[i + 1] === '+') {
        states[i] = '-';
        states[i + 1] = '-';

        let opponentWins = DFS();

        states[i] = '+';
        states[i + 1] = '+';

        if (!opponentWins) return true;
      }
    }
    
    return false;
  }

  return DFS();
};