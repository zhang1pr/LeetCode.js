/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  class Heap {
    constructor() {
      this.arr = [];
    }

    poll() {
      if (this.arr.length === 0) {
        return null;
      }

      if (this.arr.length === 1) {
        return this.arr.pop();
      }

      const item = this.arr[0];

      this.arr[0] = this.arr.pop();
      this.heapifyDown(0);

      return item;
    }

    add(item) {
      this.arr.push(item);
      this.heapifyUp(this.arr.length - 1);
      return this;
    }

    isEmpty() {
      return this.arr.length == 0;
    }

    heapifyUp(childIndex) {
      let parentIndex = Math.floor((childIndex - 1) / 2);

      while (parentIndex >= 0 && !this.checkInvariant(this.arr[parentIndex], this.arr[childIndex])) {
        [this.arr[parentIndex], this.arr[childIndex]] = [this.arr[childIndex], this.arr[parentIndex]];
        childIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
      }
    }

    heapifyDown(parentIndex) {
      let childIndex1 = parentIndex * 2 + 1;
      let childIndex2 = parentIndex * 2 + 2;
      let nextIndex;

      while (childIndex1 < this.arr.length) {
        if (childIndex2 < this.arr.length && this.checkInvariant(this.arr[childIndex2], this.arr[childIndex1])) {
          nextIndex = childIndex2;
        } else {
          nextIndex = childIndex1;
        }

        if (this.checkInvariant(this.arr[parentIndex], this.arr[nextIndex])) {
          break;
        }

        [this.arr[parentIndex], this.arr[nextIndex]] = [this.arr[nextIndex], this.arr[parentIndex]];
        parentIndex = nextIndex;
        childIndex1 = nextIndex * 2 + 1;
        childIndex2 = nextIndex * 2 + 2;
      }
    }

    checkInvariant(a, b) {
      return a[0] < b[0];
    }
  }

  const heap = new Heap();

  for (let i = 0; i < matrix.length; i++) {
    heap.add([matrix[0][i], 0, i]);
  }

  let cur;
  while (k > 0 && !heap.isEmpty()){
    k--;
    cur = heap.poll();

    if (cur[1] == matrix.length - 1) {
      continue;
    }

    heap.add([matrix[cur[1] + 1][cur[2]], cur[1] + 1, cur[2]]);
  }

  return cur[0];
};

// time:  O(n+klog(n))
// space: O(n)

// [[1]], 1
// [[1, 2]], 2
// [[1, 2], [1, 2]], 3
// [[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8
