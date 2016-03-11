var rotate = function(nums, k) {
    if (!nums || nums.length === 0) {
        return;
    }
    k = k % nums.length;
    reverse(nums, nums.length - k, nums.length - 1);
    reverse(nums, 0, nums.length - k - 1);
    reverse(nums, 0, nums.length - 1);
};

var reverse = function(nums, start, end) {
    var count = (end - start + 1) / 2;
    for (var i = 0; i < count; i++) {
        swap(nums, start + i, end - i);
    }
}

var swap = function(nums, i, j) {
    if (i !== j) {
        nums[i] ^= nums[j];
        nums[j] ^= nums[i];
        nums[i] ^= nums[j];
    }
}
