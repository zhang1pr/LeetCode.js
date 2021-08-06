class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null;
  }

  prepend(val) {
    const newNode = new ListNode(val, this.head);

    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
    }

    return this;
  }

  append(val) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  const N = nums.length;
  const arr = Array(N + 1).fill(0);

  for (let i = 0; i < N; i++) {
    arr[i + 1] = arr[i] + nums[i];
  }

  let ans = N + 1;
  const monoq = new LinkedList();

  for (let y = 0; y < arr.length; y++) {
    while (!monoq.isEmpty() && arr[y] <= arr[monoq.tail.val]) {
      monoq.deleteTail().val;
    }

    while (!monoq.isEmpty() && arr[y] >= arr[monoq.head.val] + k) {
      ans = Math.min(ans, y - monoq.deleteHead().val);
    }

    monoq.append(y);
  }

  return ans < N + 1 ? ans : -1;
};

// time:  O(n)
// space: O(n)

// [1], 1
// [1, 2], 4
// [2, -1, 2], 3
