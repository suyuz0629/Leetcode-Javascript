var nums;
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    sums = [];
    sums.push(0);
    var sum = 0;
    var index = 1;
    for (var num of nums) {
        sum += num;
        sums[index++] = sum;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return sums[j + 1] - sums[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
