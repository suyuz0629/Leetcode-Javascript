var summaryRanges = function(nums) {
    var result = [];
    if (!nums || nums.length === 0) {
        return result;
    }
    var index = 0;
    while (index < nums.length) {
        var cur = nums[index];
        while (nums[index] + 1 === nums[index + 1]) {
            index++;
        }
        if (nums[index] !== cur) {
            result.push("" + cur + "->" + nums[index++]);
        }  else {
            result.push("" + cur);
            index++;
        }
    }
    return result;
};
