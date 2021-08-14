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
    return a >= b;
  }
}

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  const heap = new Heap();
  let ans = 0;
  let prev = 0;

  for (const [location, capacity] of stations) {
    startFuel = startFuel - location + prev;

    while (!heap.isEmpty() && startFuel < 0) {
      startFuel += heap.poll();
      ans++;
    }

    if (startFuel < 0) {
      return -1;
    }

    heap.add(capacity);
    prev = location;
  }

  startFuel -= target - prev;
  while (!heap.isEmpty() && startFuel < 0) {
    startFuel += heap.poll();
    ans++;
  }

  if (startFuel < 0) {
    return -1;
  }

  return ans;
};


// time:  O(nlog(n))
// space: O(n)

// 1, 1, []
// 100, 1, [[10, 100]]
// 100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]
