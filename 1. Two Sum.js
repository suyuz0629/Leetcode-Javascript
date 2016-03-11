/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} the index
 */
var twoSum = function(nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] !== undefined) {
            return [obj[target - nums[i]], i];
        } else {
            obj[nums[i]] = i;
        }
    }
    return [0, 0];
};
