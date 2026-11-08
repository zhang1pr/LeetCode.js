var minAddToMakeValid = function(S) {
  let open = 0, close = 0;
  
  for (let c of S) {
    if (c === '(') {
      open++;
    } else if (open == 0)  {
      close++;
    } else {
      open--;
    }
  }
  
  return open + close;
};

// time:  O(n)
// space: O(1)

// '())'
// '((('