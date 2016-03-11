var singleNumber = function(nums) {
    if (!nums || nums.length === 0) {
        return -1;
    }
    var result = nums[0];
    for (var i = 1; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};
