/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	const res = [];

	function backtrack(index, array) {
    res.push(array)

		for (let i = index; i < nums.length; i++) {
			backtrack(i + 1, [...array, nums[i]])
		}
	}

	backtrack(0, []);

	return res;
};

// time:  O(n*2^n)
// space: O(2^n)

// [0]
// [1]
// [-1, 1]
// [1, 2, 3]
