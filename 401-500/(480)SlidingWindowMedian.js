/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
	const arr = [];
	const res = [];
	const isEven = k % 2 == 0;
	const m = k >>> 1;

	for (let i = 0; i < nums.length; i++) {
		binaryInsertion(arr, nums[i]);

		if (arr.length > k) {
			binaryDeletion(arr, nums[i - k]);
		}

		if (arr.length == k) {
			res.push(isEven ? (arr[m - 1] + arr[m]) / 2 : arr[m]);
		}
	}

	return res;
};

var binaryInsertion = function(arr, target) {
	let left = 0
	let right = arr.length;

	while (left < right) {
		const mid = (left + right) >>> 1;

		if (target > arr[mid]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	arr.splice(left, 0, target);
};

var binaryDeletion = function(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = (left + right) >>> 1;

		if (target == arr[mid]) {
			arr.splice(mid, 1);
			return;
		} else if (target > arr[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
}

// time:  O(nlog(k))
// space: O(k)

// [0], 1
// [0, 1], 2
// [1, 3, -1, -3, 5, 3, 6, 7], 1
// [1, 3, -1, -3, 5, 3, 6, 7], 2
// [1, 3, -1, -3, 5, 3, 6, 7], 3
// [1, 2, 3, 4, 2, 3, 1, 4, 2], 3
