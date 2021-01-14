class Heap {
  constructor() {
    this.arr = [];
  }

  poll() {
    if (this.arr.length === 0) {
      return null;
    }

    if (this.arr.length === 1) {
      return this.arr.pop();
    }

    const item = this.arr[0];

    this.arr[0] = this.arr.pop();
    this.heapifyDown(0);

    return item;
  }

  add(item) {
    this.arr.push(item);
    this.heapifyUp(this.arr.length - 1);
    return this;
  }

  isEmpty() {
    return this.arr.length == 0;
  }

  heapifyUp(childIndex) {
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (parentIndex >= 0 && !this.checkInvariant(this.arr[parentIndex], this.arr[childIndex])) {
      [this.arr[parentIndex], this.arr[childIndex]] = [this.arr[childIndex], this.arr[parentIndex]];
      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
  }

  heapifyDown(parentIndex) {
    let childIndex1 = parentIndex * 2 + 1;
    let childIndex2 = parentIndex * 2 + 2;
    let nextIndex;

    while (childIndex1 < this.arr.length) {
      if (childIndex2 < this.arr.length && this.checkInvariant(this.arr[childIndex2], this.arr[childIndex1])) {
        nextIndex = childIndex2;
      } else {
        nextIndex = childIndex1;
      }

      if (this.checkInvariant(this.arr[parentIndex], this.arr[nextIndex])) {
        break;
      }

      [this.arr[parentIndex], this.arr[nextIndex]] = [this.arr[nextIndex], this.arr[parentIndex]];
      parentIndex = nextIndex;
      childIndex1 = nextIndex * 2 + 1;
      childIndex2 = nextIndex * 2 + 2;
    }
  }

  checkInvariant(a, b) {
    return a[0] + a[1] < b[0] + b[1];
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const heap = new Heap();
  const res = [];

  if (nums1.length == 0 || nums2.length == 0 || k == 0) {
    return res;
  }

  for (let i = 0; i < nums1.length && i < k; i++) {
    heap.add([nums1[i], nums2[0], 0]);
  }

  while (k > 0 && !heap.isEmpty()){
    k--;
    const cur = heap.poll();
    res.push(cur.slice(0, 2));

    if (cur[2] == nums2.length - 1) {
      continue;
    }

    heap.add([cur[0], nums2[cur[2] + 1], cur[2] + 1]);
  }

  return res;
};

// time:  O(klog(k))
// space: O(k)

// [1, 2], [3], 3
// [1, 1, 2], [1, 2, 3], 2
// [1, 7, 11], [2, 4, 6], 3
