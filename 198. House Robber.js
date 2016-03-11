var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    var robbedMoney = new Array(nums.length);
    robbedMoney[0] = nums[0];
    robbedMoney[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < nums.length; i++) {
        robbedMoney[i] = Math.max(nums[i] + robbedMoney[i - 2], robbedMoney[i - 1]);
    }
    return robbedMoney[nums.length - 1];
};
