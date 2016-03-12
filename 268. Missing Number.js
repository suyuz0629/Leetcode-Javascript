var missingNumber = function(nums) {
    for (var i in nums) {
        while (nums[i] !== i && nums[i] < nums.length) {
            if (nums[nums[i]] === nums[i]) {
                break;
            }
            var t = nums[i];
            nums[i] = nums[t];
            nums[t] = t;
        }
    }
    for (var num in nums) {
        if (nums[num] != num) {
            return parseInt(num);
        }
    }
    return nums.length;
};
