// Use the object instead of map
var containsDuplicate = function(nums) {
    var object = {};

    for(var i = 0; i < nums.length; i++){
        object[nums[i]] = object[nums[i]] + 1 || 1;

        if(object[nums[i]] > 1) return true;
    }

    return false;
};

var containsDuplicate = function(nums) {
    if (!nums || nums.length === 0) {
        return false;
    }
    var set = new Set();
    for (var num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }
    return false;
};
