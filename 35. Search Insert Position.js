var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = (left + right) >>> 1;
        if (mid === left) {
            break;
        }
        if (target < nums[mid]) {
            right = mid;
        } else if (target > nums[mid]) {
            left = mid;
        } else {
            return mid;
        }
    }
    if (nums[left] > target) {
        return 0;
    } else if (nums[left] === target) {
        return left;
    } else if (nums[left] < target && nums[right] >= target) {
        return right;
    } else if (nums[right] < target) {
        return right + 1;
    }
};
