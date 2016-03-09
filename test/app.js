var maxSubArrayLen = function(nums, k) {
    if (!nums || nums.length === 0) {
      return 0;
    }
    var sums = new Array(nums.length + 1);
    var index = 0;
    sums[index++] = 0;
    for (var num of nums) {
      sums[index] = num + sums[index - 1];
      index++;
    }
    var obj = {};
    for (var i = 0; i <= nums.length; i++) {
      if (obj[sums[i]] === undefined) {
          obj[sums[i]] = i;
      }
    }

    for (var i = nums.length; i >= 1; i--) {
        console.log(i + " " + obj[k + sums[i]] + " " + sums[i]);
      if (obj[k + sums[i]] !== undefined) {
        return i - obj[k + sums[i]];
      }
    }
};

console.log(maxSubArrayLen([-2,-1,2,1], 1));
