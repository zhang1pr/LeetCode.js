/**
 * @param {string} expression
 * @param {string[]} evalvars
 * @param {number[]} evalints
 * @return {string[]}
 */
 var basicCalculatorIV = function(expression, evalvars, evalints) {
  class Term {
    constructor(term, map) {
      this.para = 1;
      this.variable = [];
      this.map = map;

      if (Number.isInteger(term)) {
        this.para = term;
      } else if (term >= 'a' && term <= 'z') {
        if (map.has(term)) {
          this.para = map.get(term);
        } else {
          this.variable.push(term);
        }
      } else {
        this.para = term.para;
        this.variable = term.variable;
      }
    }

    toString() {
      if (this.para == 0) return '';

      let ans = '';

      for (const s of this.variable) {
        ans = ans + '*' + s;
      }

      return this.para + ans;
    }

    equals(target) {
      if (this.variable.length != target.variable.length) {
        return false;
      }

      for (let i = 0; i < this.variable.length; i++) {
        if (this.variable[i].equals) {
          if (!this.variable[i].equals(target.variable[i])) {
            return false;
          }
        } else {
          if (this.variable[i] != target.variable[i]) {
            return false;
          }
        }
      }

      return true;
    }

    compareTo(target) {
      if (this.variable.length > target.variable.length) {
        return -1;
      }
      if (this.variable.length < target.variable.length) {
        return 1;
      }

      for (let i = 0; i < this.variable.length; i++) {
        let x;

        if (this.variable[i].compareTo) {
          x = this.variable[i].compareTo(target.variable[i]);
        } else {
          x = this.variable[i] > target.variable[i] ? 1 : this.variable[i] < target.variable[i] ? -1 : 0;
        }

        if (x != 0) {
          return x;
        }
      }

      return 0;
    }

    times(target) {
      const pro = new Term(this.para * target.para, this.map);

      for (const s of this.variable) {
        pro.variable.push(s);
      }

      for (const s of target.variable) {
        pro.variable.push(s);
      }

      pro.variable.sort();
      return pro;
    }
  }

  class Expression {
    constructor(exp, map) {
      this.list = [];
      this.oper = '+';
      this.map = map;

      if (Number.isInteger(exp)) {
        this.list.push(new Term(exp, map));
      } else if (exp >= 'a' && exp <= 'z') {
        this.list.push(new Term(exp, map));
      } else {
        this.list = exp;
      }
    }

    times(target) {
      let c = [];
      for (const t1 of this.list) {
        for (const t2 of target.list) {
          c.push(t1.times(t2));
        }
      }

      c = combine(c);
      return new Expression(c, this.map);
    }

    plus(target, sgn) {
      let c = [];
      for (const t of this.list) {
        c.push(new Term(t, this.map));
      }

      for (const t of target.list) {
        const t2 = new Term(t, this.map);
        t2.para *= sgn;
        c.push(t2);
      }

      c = combine(c);
      return new Expression(c, this.map);
    }

    cal(target) {
      if (this.oper == '+') {
        return this.plus(target, 1);
      }

      if (this.oper == '-') {
        return this.plus(target, -1);
      }

      return this.times(target);
    }

    toList() {
      const ans = [];
      for (const t of this.list) {
        const s = t.toString();

        if (s.length > 0) {
          ans.push(s);
        }
      }

      return ans;
    }
  }

  function combine(a) {
    a.sort((t1, t2) => t1.compareTo(t2));
    const c = [];

    for (const t of a) {
      if (c.length != 0 && t.equals(c[c.length - 1])) {
        c[c.length - 1].para += t.para;
      } else {
        c.push(new Term(t, map));
      }
    }

    return c;
  };

  const map = new Map();
  for (let i = 0; i < evalvars.length; i++) {
    map.set(evalvars[i], evalints[i]);
  }

  let i = 0;
  const l = expression.length;
  const stack = [new Expression(0, map)];
  const priStack = [0];
  let pri = 0;

  while (i < l) {
    const ch = expression[i];

    if ('0' <= ch && ch <= '9') {
      let num = 0;
      while (i < l && '0' <= expression[i] && expression[i] <= '9') {
        num = num * 10 + Number(expression[i]);
        i++;
      }

      stack.push(new Expression(num, map));
      continue;
    }

    if ('a' <= ch && ch <= 'z') {
      let s = '';

      while (i < l && 'a' <= expression[i] && expression[i] <= 'z') {
        s += expression[i];
        i++;
      }

      stack.push(new Expression(s, map));
      continue;
    }

    if (ch == '(') {
      pri += 2;
    }

    if (ch == ')') {
      pri -= 2;
    }

    if (ch == '+' || ch == '-' || ch == '*') {
      let nowPri = pri;
      if (ch == '*') {
        nowPri++;
      }

      while (priStack.length != 0 && nowPri <= priStack[priStack.length - 1]) {
        const now = stack.pop();
        const last = stack.pop();
        priStack.pop();
        stack.push(last.cal(now));
      }

      stack[stack.length - 1].oper = ch;
      priStack.push(nowPri);
    }

    i++;
  }

  while (stack.length > 1) {
    const now = stack.pop();
    const last = stack.pop();
    stack.push(last.cal(now));
  }

  return stack[stack.length - 1].toList();
};

// time:  O(nlog(n)+4^(varLen/4)log(4^(varLen/4))
// space: O(n)

// '7 - 7', [], []
// 'e + 8 - a + 5', ['e'], [1]
// '(e + 8) * (e - 8)', [], []
// 'a * b * c + b * a * c * 4', [], []
// 'e - 8 + temperature - pressure', ['e', 'temperature'], [1, 12]
// '((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))', [], []
