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
    return a[1] <= b[1];
  }
}

/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function(edges, maxMoves, n) {
  let res = 0;
  const heap = new Heap();
  const visited = Array(n).fill(false);
  const graph = [...Array(n)].map(() => []);

  const distance = Array(n).fill(Infinity);
  for (const [a, b, w] of edges) {
    graph[a].push([b, w]);
    graph[b].push([a, w]);
  }

  distance[0] = 0;
  heap.add([0, 0]);

  while (!heap.isEmpty()) {
    const [curNode] = heap.poll();

    if (visited[curNode]) {
      continue;
    }
    visited[curNode] = true;

    if (distance[curNode] <= maxMoves) {
      res++;
    }

    for (const [nei, w] of graph[curNode]) {
      const d = distance[curNode] + w + 1;

      if (distance[nei] > d) {
        distance[nei] = d;
        heap.add([nei, d]);
      }
    }
  }

  for (const [a, b] of edges) {
    const dista = maxMoves - distance[a] >= 0 ? maxMoves - distance[a] : 0;
    const distb = maxMoves - distance[b] >= 0 ? maxMoves - distance[b] : 0;
    res += Math.min(w, dista + distb);
  }

  return res;
};

// time:  O(n^2log(n))
// space: O(n^2)

// [[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3
// [[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4
// [[1, 2, 4], [1, 4, 5], [1, 3, 1], [2, 3, 4], [3, 4, 5]], 17, 5
// [[0, 3, 8], [0, 1, 4], [2, 4, 3], [1, 2, 0], [1, 3, 9], [0, 4, 7], [3, 4, 9], [1, 4, 4], [0, 2, 7], [2, 3, 1]], 8, 5
