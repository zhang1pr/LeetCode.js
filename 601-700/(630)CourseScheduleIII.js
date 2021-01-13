class Heap {
  constructor() {
    this.array = [];
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
    return a >= b;
  }
}

/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  courses.sort((a, b) => a[1] - b[1]);
  const heap = new Heap();
  let time = 0;

  for (const [cost, end] of courses) {
    if (time + cost <= end) {
      heap.add(cost);
      time += cost;
    } else if (!heap.isEmpty() && heap.peek() > cost) {
      time = time + cost - heap.poll();
      heap.add(cost);
    }
  }

  return heap.size();
};

// time:  O(nlog(n))
// space: O(n)

// [[1, 2]]
// [[2, 2]]
// [[3, 2]]
// [[1, 2], [2, 2]]
// [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
// [[7, 17], [3, 12], [10, 20], [9, 10], [5, 20], [10, 19], [4, 18]]
