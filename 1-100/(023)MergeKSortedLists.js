/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  class Heap {
    constructor() {
      this.array = [];
    }

    getLeftChildIndex(index) {
      return 2 * index + 1;
    }

    getRightChildIndex(index) {
      return 2 * index + 2;
    }

    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }

    hasParent(index) {
      return this.getParentIndex(index) >= 0;
    }

    hasLeftChild(index) {
      return this.getLeftChildIndex(index) < this.array.length;
    }

    hasRightChild(index) {
      return this.getRightChildIndex(index) < this.array.length;
    }

    leftChild(index) {
      return this.array[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
      return this.array[this.getRightChildIndex(index)];
    }

    parent(index) {
      return this.array[this.getParentIndex(index)];
    }

    swap(index1, index2) {
      [this.array[index1], this.array[index2]] = [this.array[index2], this.array[index1]];
    }

    poll() {
      if (this.array.length === 0) {
        return null;
      }

      if (this.array.length === 1) {
        return this.array.pop();
      }

      const item = this.array[0];

      this.array[0] = this.array.pop();
      this.heapifyDown(0);

      return item;
    }

    add(item) {
      this.array.push(item);
      this.heapifyUp(this.array.length - 1);
      return this;
    }

    isEmpty() {
      return this.array.length == 0;
    }

    heapifyUp(index) {
      while (
        this.hasParent(index)
        && !this.checkInvariant(this.parent(index), this.array[index])
      ) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
      }
    }

    heapifyDown(index) {
      let currentIndex = index;
      let nextIndex = null;

      while (this.hasLeftChild(currentIndex)) {
        if (
          this.hasRightChild(currentIndex)
          && this.checkInvariant(this.rightChild(currentIndex), this.leftChild(currentIndex))
        ) {
          nextIndex = this.getRightChildIndex(currentIndex);
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex);
        }

        if (this.checkInvariant(this.array[currentIndex], this.array[nextIndex])) {
          break;
        }

        this.swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
      }
    }

    checkInvariant(item1, item2) {
      return item1 <= item2;
    }
  }
    
  const heap = new Heap();
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i];
    
    while (list) {
      heap.add(list.val);
      list = list.next;
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

// test cases:
// []
// [], []
// [-1], [1]
// [0], [1], [2]
// [1, 4, 5], [1, 3, 4], [2, 6]
