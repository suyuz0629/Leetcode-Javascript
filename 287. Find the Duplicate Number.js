var findDuplicate = function(nums) {
    // Extra space
    // var obj = {};
    // for (var i of nums) {
    //     if (obj[i]) {
    //         return i;
    //     } else {
    //         obj[i] = i;
    //     }
    // }
    // return 0;

    // [1, 3, 2, 1]
    // No extra space
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (num - 1 !== i) {
            if (nums[num - 1] === num) {
                return num;
            } else {
                nums[i] = nums[num - 1];
                nums[num - 1] = num;
                i--;
            }
        }
    }
    return 0;
};
