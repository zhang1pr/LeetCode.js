
var StockSpanner = function () {
  this.arr = [];
};

// time:  O(1)
// space: O(1)

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let count = 1;
  while (this.arr.length && this.arr.at(-1)[0] <= price) {
    let [lastPrice, lastCount] = this.arr.pop();
    count += lastCount;
  }

  this.arr.push([price, count]);

  return count;
};

// time:  O(n)
// space: O(1)

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// ['StockSpanner', 'next', 'next', 'next', 'next', 'next', 'next', 'next'], [[], [100], [80], [60], [70], [60], [75], [85]]
