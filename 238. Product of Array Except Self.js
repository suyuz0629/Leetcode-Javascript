var productExceptSelf = function(nums) {
    if (!nums || nums.length === 0) {
        return [];
    }
    var result = new Array(nums.length), i, temp = 1;
    result.fill(1);
    // record the left side product
    for (i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    // get the right side product
    for (i = nums.length - 2; i >= 0; i--) {
        temp *= nums[i + 1];
        result[i] = result[i] * temp;
    }
    return result;
};
