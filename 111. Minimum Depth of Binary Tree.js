var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    return min(root, 1);
};

var min = function(root, depth) {
    if (!root) {
        return Number.MAX_VALUE;
    }
    if (!root.left && !root.right) {
        return depth;
    }
    var left = min(root.left, depth + 1);
    var right = min(root.right, depth + 1);
    return Math.min(left, right);
}
