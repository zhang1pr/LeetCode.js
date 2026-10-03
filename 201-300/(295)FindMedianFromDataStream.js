class MyHeap {
  constructor(comparator) {
    this.array = [];
    this.comparator = comparator;
  }

  peek() {
    if (this.array.length === 0) {
      return null;
    }

    return this.array[0];
  }

  size() {
    return this.array.length;
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

  heapifyUp(childIndex) {
    let parentIndex = Math.floor((childIndex - 1)/2);

    while (parentIndex >= 0 && !this.checkInvariant(this.array[parentIndex], this.array[childIndex])) {
      [this.array[parentIndex], this.array[childIndex]] = [this.array[childIndex], this.array[parentIndex]];
      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1)/2);
    }
  }

  heapifyDown(parentIndex) {
    let childIndex1 = parentIndex * 2 + 1;
    let childIndex2 = parentIndex * 2 + 2;
    let nextIndex;

    while (childIndex1 < this.array.length) {
      if (childIndex2 < this.array.length && this.checkInvariant(this.array[childIndex2], this.array[childIndex1])) {
        nextIndex = childIndex2;
      } else {
        nextIndex = childIndex1;
      }

      if (this.checkInvariant(this.array[parentIndex], this.array[nextIndex])) {
        break;
      }

      [this.array[parentIndex], this.array[nextIndex]] = [this.array[nextIndex], this.array[parentIndex]];
      parentIndex = nextIndex;
      childIndex1 = nextIndex * 2 + 1;
      childIndex2 = nextIndex * 2 + 2;
    }
  }

  checkInvariant(a, b) {
    return this.comparator(a, b) >= 0;
  }
}

var MedianFinder = function() {
  this.maxHeap = new MyHeap((a, b) => a - b);
  this.minHeap = new MyHeap((a, b) => b - a);
};

// time:  O(1)
// space: O(1)

/**
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  if (this.maxHeap.isEmpty() || num < this.maxHeap.peek()) {
    this.maxHeap.add(num);
  } else {
    this.minHeap.add(num);
  }

  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    this.minHeap.add(this.maxHeap.poll());
  } else if (this.minHeap.size() > this.maxHeap.size()) {
    this.maxHeap.add(this.minHeap.poll());
  }
};

// time:  O(log(n))
// space: O(1)

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.maxHeap.size() > this.minHeap.size()) {
    return this.maxHeap.peek();
  } else if (this.maxHeap.size() < this.minHeap.size()) {
    return this.minHeap.peek();
  } else {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

// time:  O(1)
// space: O(1)

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// ['MedianFinder', 'addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'], [[], [1], [2], [], [3], []]