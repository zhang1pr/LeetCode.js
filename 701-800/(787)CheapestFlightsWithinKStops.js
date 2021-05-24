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
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  const visited = new Map();
  const prices = new Map();

  for (const [from, to, weight] of flights) {
    if (!prices.has(from)) {
      prices.set(from, new Map());
    }

    prices.get(from).set(to, weight);
  }

  const heap = new Heap().add([0, 0, src]);
  while (!heap.isEmpty()) {
    const [dist, moves, node] = heap.poll();

    if (node == dst && K >= moves - 1) {
      return dist;
    }

    if (!visited.has(node) || visited.get(node) > moves) {
      visited.set(node, moves);

      for (const [nei, weight] of prices.get(node) || new Map()) {
        heap.add([dist + weight, moves + 1, nei]);
      }
    }
  }

  return -1;
};

// time:  O(n^2log(n))
// space: O(n^2)

// 3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0
// 3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1
