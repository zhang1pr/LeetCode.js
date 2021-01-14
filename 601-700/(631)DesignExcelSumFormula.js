class Formula {
  constructor(cells, val) {
    this.cells = cells;
    this.val = val;
  }
}

/**
* @param {number} H
* @param {character} W
*/
var Excel = function(H, W) {
  this.stack = [];
  this.formulas = [...Array(H)].map(() => Array(W.charCodeAt(0) - 65 + 1).fill(null));

  this.calculate = function(r, c, cells) {
    let sum = 0;

    for (const [key, val] of cells) {
      const x = parseInt(key.slice(1), 10) - 1;
      const y = key[0].charCodeAt(0) - 65;

      if (this.formulas[x][y] != null) {
        sum += this.formulas[x][y].val * val;
      }
    }

    this.formulas[r][c] = new Formula(cells, sum);
    return sum;
  };
};

// time:  O(mn)
// space: O(mn)

/**
* @param {number} r
* @param {character} c
* @param {number} v
* @return {void}
*/
Excel.prototype.set = function(r, c, v) {
  this.formulas[r - 1][c.charCodeAt(0) - 65] = new Formula(new Map(), v);

  function DFS(r, c, formulas, stack) {
    for (let i = 0; i < formulas.length; i++) {
      for (let j = 0; j < formulas[0].length; j++) {
        if (formulas[i][j] != null && formulas[i][j].cells.has(String.fromCharCode(c + 65) + (r + 1).toString())) {
          DFS(i, j, formulas, stack);
        }
      }
    }

    stack.push([r, c]);
  }

  DFS(r - 1, c.charCodeAt(0) - 65, this.formulas, this.stack);

  while (this.stack.length) {
    const [x, y] = this.stack.pop();

    if (this.formulas[x][y].cells.size > 0) {
      this.calculate(x, y, this.formulas[x][y].cells);
    }
  }
};

// time:  O(m^2*n^2)
// space: O(m^2*n^2)

/**
* @param {number} r
* @param {character} c
* @return {number}
*/
Excel.prototype.get = function(r, c) {
  if (this.formulas[r - 1][c.charCodeAt(0) - 65] == null) {
    return 0;
  }

  return this.formulas[r - 1][c.charCodeAt(0) - 65].val;
};

// time:  O(1)
// space: O(1)

/**
* @param {number} r
* @param {character} c
* @param {string[]} strs
* @return {number}
*/
Excel.prototype.sum = function(r, c, strs) {
  const cells = new Map();

  for (const str of strs) {
    if (!str.includes(':')) {
      cells.set(str, (cells.get(str) || 0) + 1);
    } else {
      const [a, b] = str.split(':');
      const ai = parseInt(a.slice(1), 10);
      const bi = parseInt(b.slice(1), 10);
      const aj = a[0];
      const bj = b[0];

      for (let i = ai; i <= bi; i++) {
        for (let j = aj.charCodeAt(0); j <= bj.charCodeAt(0); j++) {
          const key = String.fromCharCode(j) + i.toString();

          cells.set(key, (cells.get(key) || 0) + 1);
        }
      }
    }
  }

  const sum = this.calculate(r - 1, c - 'A', cells);
  this.set(r, c, sum);
  this.formulas[r - 1][c.charCodeAt(0) - 65] = new Formula(cells, sum);

  return sum;
};

// time:  O(m^2*n^2 + mn*sLen)
// space: O(1)

/**
* Your Excel object will be instantiated and called as such:
* var obj = new Excel(H, W)
* obj.set(r,c,v)
* var param_2 = obj.get(r,c)
* var param_3 = obj.sum(r,c,strs)
*/

// ['Excel', 'get', 'set', 'get'], [[3, 'C'], [1, 'A'], [1, 'A',1], [1, 'A']]
// ['Excel', 'sum', 'set', 'get'], [[3, 'C'], [1, 'A', ['A2']], [2, 'A',1], [1, 'A']]
// ['Excel', 'get', 'set', 'get', 'sum', 'set', 'get', 'sum'], [[5, 'E'], [1, 'A'], [1, 'A',1], [1, 'A'], [2, 'B', ['A1', 'A1']], [1, 'A',2], [2, 'B'], [3, 'C', ['B2', 'A1:B2']]]
