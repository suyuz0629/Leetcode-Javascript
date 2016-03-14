/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// iterative
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    var nodes = [], lefts = [], rights = [], node, left, right, min, root = new TreeNode(0);

    nodes.push(root);
    lefts.push(0);
    rights.push(nums.length - 1);
    while (nodes.length) {
        node = nodes.pop();
        left = lefts.pop();
        right = rights.pop();
        mid = (left + right) >>> 1;
        node.val = nums[mid];
        if (left <= mid - 1) {
            node.left = new TreeNode(0);
            nodes.push(node.left);
            lefts.push(left);
            rights.push(mid - 1);
        }
        if (mid + 1 <= right) {
            node.right = new TreeNode(0);
            nodes.push(node.right);
            lefts.push(mid + 1);
            rights.push(right);
        }
    }
    return root;
};

// recursive
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    return build(nums, 0, nums.length - 1);
};

var build = function(nums, left ,right) {
    if (left > right) {
        return null;
    }
    var mid = (left + right) >>> 1;
    var root = new TreeNode(nums[mid]);
    root.left = build(nums, left, mid - 1);
    root.right = build(nums, mid + 1, right);
    return root;
};
