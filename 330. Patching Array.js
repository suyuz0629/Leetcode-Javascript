var minPatches = function(nums, n) {
    var reach = 0, i = 0, add = 0;

    while (reach < n) {
        if (i < nums.length && nums[i] <= reach + 1) {
            reach += nums[i++];
        } else {
            reach += reach + 1;
            add++;
        }
    }
    return add;
};
