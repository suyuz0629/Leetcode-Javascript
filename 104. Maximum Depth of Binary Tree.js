// Recursive
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// Iterative
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    var queue = [];
    queue.push(root);
    var height = 0;
    while (queue.length !== 0) {
        height++;
        var length = queue.length;
        for (var i = 0; i < length; i++) {
            var node = queue.shift();
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return height;
};
