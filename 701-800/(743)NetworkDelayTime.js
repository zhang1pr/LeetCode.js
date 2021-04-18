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
    return a[0] <= b[0];
  }
}

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  const graph = new Map();
  for (const [from, to, w] of times) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }

    graph.get(from).push([to, w]);
  }

  const heap = new Heap();
  heap.add([0, K]);

  const dist = new Map();

  while (!heap.isEmpty()) {
    const [d, node] = heap.poll();

    if (dist.has(node)) {
      continue;
    }

    dist.set(node, d);

    if (graph.has(node)) {
      for (const [nei, d2] of graph.get(node)) {
        if (!dist.has(nei)) {
          heap.add([d + d2, nei]);
        }
      }
    }
  }

  if (dist.size != N) {
    return -1;
  }

  return Math.max(...dist.values());
};

// time:  O(n^2log(n))
// space: O(n^2)

// [[1, 2, 1]], 2, 1
// [[1, 2, 1]], 2, 2
// [[2, 1, 1],[2, 3, 1],[3, 4, 1]], 4, 2
