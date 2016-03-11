var sortColors = function(nums) {
    if (!nums || nums.length <= 1) {
        return;
    }
    var left = 0;
    var right = nums.length - 1;
    for (var i = 0; i <= right; i++) {
        if (nums[i] === 0) {
            swap(nums, i, left++);
        } else if (nums[i] === 2) {
            swap(nums, i--, right--);
        }
    }
};

var swap = function(nums, i, j) {
    if (i !== j) {
        nums[i] ^= nums[j];
        nums[j] ^= nums[i];
        nums[i] ^= nums[j];
    }
}
