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
    return a[2] <= b[2];
  }
}

/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
  const m = forest.length;
  const n = forest[0].length;
  const heap = new Heap();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (forest[i][j] > 1) {
        heap.add([i, j, forest[i][j]]);
      }
    }
  }

  const start = [0, 0];
  let sum = 0;
  while (!heap.isEmpty()) {
    const tree = heap.poll();
    const step = minStep(forest, start, tree, m, n);

    if (step < 0) {
      return -1;
    }

    sum += step;

    start[0] = tree[0];
    start[1] = tree[1];
  }

  return sum;
};

var minStep = function(forest, start, tree, m, n) {
  const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  let step = 0;

  const visited = [...Array(m)].map(() => Array(n).fill(false));
  let queue = [start];
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const newQueue = [];

    for (const [x, y] of queue) {
      if (x == tree[0] && y == tree[1]) {
        return step;
      }

      for (const [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || nx >= m || ny < 0 || ny >= n || forest[nx][ny] == 0 || visited[nx][ny]) {
          continue;
        }

        newQueue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }

    queue = newQueue;
    step++;
  }

  return -1;
};

// time:  O(m^2*n^2)
// space: O(mn)

// [[1, 2 ,3], [0, 0, 4], [7, 6, 5]]
// [[1, 2, 3], [0, 0, 0], [7, 6, 5]]
// [[2, 3, 4], [0, 0, 5], [8, 7, 6]]
