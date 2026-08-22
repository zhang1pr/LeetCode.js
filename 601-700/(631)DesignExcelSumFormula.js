class Formula {
  constructor(cells, val) {
    this.cells = cells;
    this.val = val;
  }
}

/**
 * @param {number} height
 * @param {character} width
 */
var Excel = function(height, width) {
  this.stack = [];
  this.formulas = [...Array(height)].map(() => Array(width.charCodeAt(0) - 65 + 1).fill(null));

  this.calculate = function(row, column, cells) {
    let sum = 0;

    for (const [key, val] of cells) {
      const x = parseInt(key.slice(1), 10) - 1;
      const y = key[0].charCodeAt(0) - 65;

      if (this.formulas[x][y] != null) {
        sum += this.formulas[x][y].val * val;
      }
    }

    this.formulas[row][column] = new Formula(cells, sum);
    return sum;
  };
};

// time:  O(mn)
// space: O(mn)

/** 
 * @param {number} row 
 * @param {character} column 
 * @param {number} val
 * @return {void}
 */
Excel.prototype.set = function(row, column, val) {
  this.formulas[row - 1][column.charCodeAt(0) - 65] = new Formula(new Map(), val);

  function DFS(row, column, formulas, stack) {
    for (let i = 0; i < formulas.length; i++) {
      for (let j = 0; j < formulas[0].length; j++) {
        if (formulas[i][j] != null && formulas[i][j].cells.has(String.fromCharCode(column + 65) + (row + 1).toString())) {
          DFS(i, j, formulas, stack);
        }
      }
    }

    stack.push([row, column]);
  }

  DFS(row - 1, column.charCodeAt(0) - 65, this.formulas, this.stack);

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
 * @param {number} row 
 * @param {character} column
 * @return {number}
 */
Excel.prototype.get = function(row, column) {
  if (this.formulas[row - 1][column.charCodeAt(0) - 65] == null) {
    return 0;
  }

  return this.formulas[row - 1][column.charCodeAt(0) - 65].val;
};

// time:  O(1)
// space: O(1)

/** 
 * @param {number} row 
 * @param {character} column 
 * @param {string[]} numbers
 * @return {number}
 */
Excel.prototype.sum = function(row, column, numbers) {
  const cells = new Map();

  for (const str of numbers) {
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

  const sum = this.calculate(row - 1, column - 'A', cells);
  this.set(row, column, sum);
  this.formulas[row - 1][column.charCodeAt(0) - 65] = new Formula(cells, sum);

  return sum;
};

// time:  O(m^2*n^2 + mn*sLen)
// space: O(1)

/** 
 * Your Excel object will be instantiated and called as such:
 * var obj = new Excel(height, width)
 * obj.set(row,column,val)
 * var param_2 = obj.get(row,column)
 * var param_3 = obj.sum(row,column,numbers)
 */

// ['Excel', 'get', 'set', 'get'], [[3, 'C'], [1, 'A'], [1, 'A',1], [1, 'A']]
// ['Excel', 'sum', 'set', 'get'], [[3, 'C'], [1, 'A', ['A2']], [2, 'A',1], [1, 'A']]
// ['Excel', 'get', 'set', 'get', 'sum', 'set', 'get', 'sum'], [[5, 'E'], [1, 'A'], [1, 'A',1], [1, 'A'], [2, 'B', ['A1', 'A1']], [1, 'A',2], [2, 'B'], [3, 'C', ['B2', 'A1:B2']]]
