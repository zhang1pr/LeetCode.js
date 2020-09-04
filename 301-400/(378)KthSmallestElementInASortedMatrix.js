/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  class Heap {
    constructor() {
      this.array = [];
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
