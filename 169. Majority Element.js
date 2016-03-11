var majorityElement = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    var count = 0;
    var majority = nums[0];
    for (var num of nums) {
        if (num !== majority) {
            count--;
        } else {
            count++;
        }
        if (count === 0) {
            count = 1;
            majority = num;
        }
    }
    return majority;
};
