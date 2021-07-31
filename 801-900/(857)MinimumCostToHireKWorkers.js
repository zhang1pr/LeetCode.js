class Heap {
  constructor() {
    this.array = [];
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
    return a <= b;
  }
}

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
  const workers = [];

  for (let i = 0; i < quality.length; i++) {
    workers.push([wage[i] / quality[i], quality[i]]);
  }

  workers.sort((a, b) => a[0] - b[0]);

  let res = Infinity;
  let qsum = 0;

  const heap = new Heap();
  for (const [ratio, qual] of workers) {
    qsum += qual;
    heap.add(-qual);

    if (heap.size() > k) {
      qsum += heap.poll();
    }

    if (heap.size() == k) {
      res = Math.min(res, qsum * ratio);
    }
  }

  return res;
};

// time:  O(nlogn)
// space: O(n)

// [10, 20, 5], [70, 50, 30], 2
// [3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3
