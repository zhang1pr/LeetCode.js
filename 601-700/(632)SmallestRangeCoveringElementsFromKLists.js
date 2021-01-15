class Heap {
  constructor(nums, arr) {
    this.nums = nums;
    this.arr = arr;
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
    return this.nums[a][this.arr[a]] <= this.nums[b][this.arr[b]];
  }
}

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  let minx = 0;
  let miny = Infinity;
  let max = -Infinity;

  const arr = Array(nums.length).fill(0);
  let flag = true;
  const heap = new Heap(nums, arr);

  for (let i = 0; i < nums.length; i++) {
    heap.add(i);
    max = Math.max(max, nums[i][0]);
  }

  for (let i = 0; i < nums.length && flag; i++) {
    for (let j = 0; j < nums[i].length && flag; j++) {
      const index = heap.poll();

      if (miny - minx > max - nums[index][arr[index]]) {
        minx = nums[index][arr[index]];
        miny = max;
      }

      arr[index]++;

      if (arr[index] == nums[index].length) {
        flag = false;
        break;
      }

      heap.add(index);
      max = Math.max(max, nums[index][arr[index]]);
    }
  }

  return [minx, miny];
};

// time:  O(nmlog(m))
// space: O(m)

// [[10], [11]]
// [[10, 10], [11, 11]]
// [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
// [[1], [2], [3], [4], [5], [6], [7]]
// [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]
