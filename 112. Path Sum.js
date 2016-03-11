/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    }
    if (!root.left && !root.right && root.val === sum) {
        return true;
    }
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

// Iteative
// Using postorder traversal
var hasPathSum = function(root, sum) {
    if (!root) {
        return false;
    }
    var stack = [];
    var curSum = 0;
    var cur = root;
    var pre = null;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            curSum += cur.val;
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (!cur.left && !cur.right && sum === curSum) {
            return true;
        }
        if (cur.right && pre !== cur.right) {
            cur = cur.right;
        } else {
            curSum -= cur.val;
            pre = cur;
            cur = null;
            stack.pop();
        }
    }
    return false;
};
