/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
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
      return a.height <= b.height;
    }
  }

  class Cell {
    constructor(row, col, height) {
      this.row = row;
      this.col = col;
      this.height = height;
    }
  }

  if (!heightMap.length || !heightMap[0].length) {
    return 0;
  }

  const heap = new Heap();

  const m = heightMap.length;
  const n = heightMap[0].length;
  const visited = [...new Array(m)].map(() => new Array(n).fill(false));

  for (let i = 0; i < m; i++) {
    visited[i][0] = true;
    visited[i][n - 1] = true;
    heap.add(new Cell(i, 0, heightMap[i][0]));
    heap.add(new Cell(i, n - 1, heightMap[i][n - 1]));
  }

  for (let i = 1; i < n - 1; i++) {
    visited[0][i] = true;
    visited[m - 1][i] = true;
    heap.add(new Cell(0, i, heightMap[0][i]));
    heap.add(new Cell(m - 1, i, heightMap[m - 1][i]));
  }

  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  let max = 0;
  while (!heap.isEmpty()) {
    const cell = heap.poll();
    for (const [drow, dcol] of dir) {
      let row = cell.row + drow;
      let col = cell.col + dcol;

      if (row >= 0 && row < m && col >= 0 && col < n && !visited[row][col]) {
        visited[row][col] = true;
        max += Math.max(0, cell.height - heightMap[row][col]);
        heap.add(new Cell(row, col, Math.max(heightMap[row][col], cell.height)));
      }
    }
  }

  return max;
};

// time:  O(mnlog(n+m))
// space: O(n+m)

// [[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]]
