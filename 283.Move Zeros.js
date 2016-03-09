var moveZeroes = function(nums) {
    if (!nums) {
        return;
    }
    var notZero = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[notZero++] = nums[i];
            if (notZero !== i + 1) {
              nums[i] = 0;
            }
        }
    }
};
