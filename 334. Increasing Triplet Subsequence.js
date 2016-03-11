var increasingTriplet = function(nums) {
    if (!nums || nums.length === 0) {
        return false;
    }
    var min = Number.MAX_VALUE;
    var sec = Number.MAX_VALUE;
    for (var num of nums) {
        if (num <= min) {        // c1 is min seen so far (it's a candidate for 1st element)
            min = num;
        } else if (num <= sec) { // here when num > min, i.e. num might be either sec or trd
            sec = num;          // num is better than the current sec, store it
        } else  {               // here when we have/had min < sec already and trd > sec
            return true;
        }
    }
    return false;
};
