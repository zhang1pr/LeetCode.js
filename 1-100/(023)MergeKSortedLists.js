/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  class Heap {
    constructor() {
      this.arr = [];
    }

    heapifyDown(i) {
      let childIndex1 = 2 * i + 1;
      let childIndex2 = 2 * i + 2;
      let next;

      while (childIndex1 < this.arr.length) {
        if (childIndex2 < this.arr.length && this.arr[childIndex2] < this.arr[childIndex1]) {
          next = childIndex2;
        } else {
          next = childIndex1;
        }

        if (this.arr[i] <= this.arr[next]) {
          break;
        }

        [this.arr[i], this.arr[next]] = [this.arr[next], this.arr[i]];

        i = next;
        childIndex1 = 2 * i + 1;
        childIndex2 = 2 * i + 2;
      }
    }

    heapifyUp(i) {
      let p = Math.floor((i - 1) / 2);
      while (p >= 0 && this.arr[p] > this.arr[i]) {
        [this.arr[p], this.arr[i]] =   [this.arr[i], this.arr[p]];
        i = p;
        p = Math.floor((i - 1) / 2);
      }
    }

    isEmpty() {
      return this.arr.length == 0;
    }

    add(val) {
      this.arr.push(val);
      this.heapifyUp(this.arr.length - 1);
    }

    poll() {
      if (this.arr.length == 1) {
        return this.arr.pop();
      }

      const temp = this.arr[0];
      this.arr[0] = this.arr.pop();
      this.heapifyDown(0);

      return temp;
    }
  }

  const heap = new Heap();

  for (const list of lists) {
    let head = list;

    while (head) {
      heap.add(head.val);
      head = head.next;
    }
  }

  const dummy = new ListNode();
  let head = dummy;

  while (!heap.isEmpty()) {
    head.next = new ListNode(heap.poll());
    head = head.next;
  }

  return dummy.next;
};

// time:  O(nlog(k))
// space: O(1)

// []
// [], []
// [-1], [1]
// [0], [1], [2]
// [1, 4, 5], [1, 3, 4], [2, 6]
