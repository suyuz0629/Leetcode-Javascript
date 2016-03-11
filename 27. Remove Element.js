/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums) {
        return 0;
    }
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (val !== nums[i]) {
            nums[count++] = nums[i];
        }
    }
    return count;
};
