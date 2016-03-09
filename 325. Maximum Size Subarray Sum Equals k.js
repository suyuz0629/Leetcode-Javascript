var maxSubArrayLen = function(nums, k) {
    if (!nums || nums.length === 0) {
      return 0;
    }
    var sum = 0;
    var max = 0;
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === k) {
            max = i + 1;
        } else if (obj[sum - k] !== undefined) {
            max = Math.max(max, i - obj[sum - k]);
        }
        if (obj[sum] === undefined) {
            obj[sum] = i;
        }
    }
    return max;
};
