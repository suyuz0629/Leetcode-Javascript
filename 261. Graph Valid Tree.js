var validTree = function(n, edges) {
    var nums = new Array(n);
    nums.fill(-1);
    if (edges.length + 1 !== n) {
        return false;
    }
    var map = new Map();
    for (var i of edges) {
        var x = find(nums, i[0]);
        var y = find(nums, i[1]);
        if (x === y) {
            return false;
        }
        nums[x] = y;
    }
    return true;
};

var find = function(nums, n) {
    if (nums[n] === -1) {
        return n;
    }
    return find(nums, nums[n]);
}
