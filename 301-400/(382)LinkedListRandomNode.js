/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.arr = [];

  while (head.next) {
    this.arr.push(head.val);
    head = head.next;
  }

  this.arr.push(head.val);
};

// time:  O(n)
// space: O(n)

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  const minIndex = 0;
  const maxIndex = this.arr.length - 1;
  const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;

  return this.arr[randomIndex];
};

// time:  O(1)
// space: O(1)

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

// ['Solution', 'getRandom'], [[[1, 2, 3]], []]
