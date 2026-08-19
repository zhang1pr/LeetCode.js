class MyHeap {
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
    return a <= b;
  }
}

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  const arr = [];

  for (let i = 0; i < profits.length; i++) {
    arr.push([profits[i], capital[i]]);
  }

  arr.sort((a, b) => a[1] - b[1]);
  const heap = new MyHeap();
  let cnt = 0;

  while (k) {
    while (cnt < arr.length && arr[cnt][1] <= w) {
      heap.add(-arr[cnt][0]);
      cnt++;
    }

    if (!heap.isEmpty()) {
      w -= heap.poll();
    }

    k--;
  }

  return w;
};

// time:  O(max(k,nlog(n)))
// space: O(n)

// 1, 0, [1], [2]
// 1, 0, [1], [1]
// 1, 0, [1], [0]
// 1, 0, [1, 2, 3], [0, 1, 1]
// 2, 0, [1, 2, 3], [0, 1, 1]
// 2, 0, [1, 2, 3], [0, 0, 1]
// 3, 0, [1, 2, 3], [0, 0, 0]
