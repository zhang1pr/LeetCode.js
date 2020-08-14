/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bulls = 0;
  let cows = 0;
    
  const numbers = new Array(10).fill(0);
  let s;
  let g;

  for (let i = 0; i < secret.length; i++) {
    s = Number(secret[i]);
    g = Number(guess[i]);

    if (s == g) {
      bulls++;
    } else {
      if (numbers[s] < 0) {
        cows++;
      } 

      if (numbers[g] > 0) {
        cows++;
      }

      numbers[s]++;
      numbers[g]--;
    }
  }

  return bulls + 'A' + cows + 'B';  
};

// time:  O(n)
// space: O(1)

// '1807', '7810'
// '1123', '0111'
