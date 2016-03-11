/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var result = [];
    if (!root) {
        return result;
    }
    var queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        var size = queue.length;
        var level = [];
        for (var i = 0; i < size; i++) {
            var node = queue.shift();
            level.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.unshift(level);
    }
    return result;
};
