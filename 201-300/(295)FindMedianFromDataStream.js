/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.maxHeap = new Heap((a, b) => b - a);
  this.minHeap = new Heap((a, b) => a - b);
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  if (!this.maxHeap.peek() || num < this.maxHeap.peek()) {
    this.maxHeap.add(num);
  } else {
    this.minHeap.add(num);
  }
  
  if (this.maxHeap.size - this.minHeap.size > 1) {
    this.minHeap.add(this.maxHeap.poll());
  } else if (this.minHeap.size - this.maxHeap.size > 1) {
    this.maxHeap.add(this.minHeap.poll());
  }
};

// time:  O(log(n))
// space: O(1)

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.maxHeap.size > this.minHeap.size) {
    return this.maxHeap.peek();
  } else if (this.maxHeap.size < this.minHeap.size) {
    return this.minHeap.peek();
  } else {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

// time:  O(1)
// space: O(1)

/** 
*  custom Heap class
*/
class Heap {
  constructor(comparator) {
    this.size = 0;
    this.values = [];
    this.comparator = comparator || Heap.minComparator;
  }

  add(val) {
    this.values.push(val);
    this.size++;
    this.bubbleUp();
  }

  peek() {
    return this.values[0] || null;
  }

  poll() {
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;
    
    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (this.comparator(this.values[index], this.values[parent]) < 0) {
      [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let length = this.values.length;

    while (true) {
      let left = null;
      let right = null;
      let swap = null;
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;

      if (leftIndex < length) {
        left = this.values[leftIndex];
        
        if (this.comparator(left, this.values[index]) < 0) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];

        if ((swap && this.comparator(right, left) < 0) || (!swap && this.comparator(right, this.values[index]))) {
          swap = rightIndex;
        }
      }

      if (!swap) {
        break;
      }

      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
      index = swap;
    }
  }
}

/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/

// ['MedianFinder', 'addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'], [[], [1], [2], [], [3], []]
