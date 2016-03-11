/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums) {
        return 0;
    }
    var count = 0;
    var pre = null;
    for (var i = 0; i < nums.length; i++) {
        if (pre === null) {
            pre = nums[i];
            nums[count++] = nums[i];
        } else if (pre !== nums[i]) {
            pre = nums[i];
            nums[count++] = nums[i];
        }
    }
    return count;
};
