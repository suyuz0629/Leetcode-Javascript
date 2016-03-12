/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}   1 based
 */
var twoSum = function(nums, target) {
    if (!nums) {
        return [];
    }
    var left = 0;
    var right = nums.length - 1;
    var result = [];
    while (left < right) {
        var sum = nums[left] + nums[right];
        if (sum === target) {
            result[0] = left + 1;
            result[1] = right + 1;
            return result;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};
