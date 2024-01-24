/**
 * contains duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniqueSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (uniqueSet.has(nums[i])) {
            return true;
        } else {
            uniqueSet.add(nums[i]);
        }
    }

    return false;
};
