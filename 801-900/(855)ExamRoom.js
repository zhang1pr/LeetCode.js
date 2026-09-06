/**
 * @param {number} n
 */
var ExamRoom = function(n) {
  this.arr = [];
  this.n = n;
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
  if (this.arr.length == 0) {
    this.arr.push(0);
    return 0;
  }

  let d = Math.max(this.arr[0], this.n - 1 - this.arr[this.arr.length - 1]);
  for (let i = 0; i < this.arr.length - 1; i++) {
    d = Math.max(d, Math.floor((this.arr[i + 1] - this.arr[i]) / 2));
  }

  if (this.arr[0] == d) {
    this.arr.unshift(0);
    return 0;
  }

  for (let i = 0; i < this.arr.length - 1; i++) {
    if (Math.floor((this.arr[i + 1] - this.arr[i]) / 2) == d) {
      this.arr.splice(i + 1, 0, Math.floor((this.arr[i + 1] + this.arr[i]) / 2));
      return this.arr[i + 1];
    }
  }

  this.arr.push(this.n - 1);
  return this.n - 1;  
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i] == p) {
      this.arr.splice(i, 1);
    }
  }  
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */