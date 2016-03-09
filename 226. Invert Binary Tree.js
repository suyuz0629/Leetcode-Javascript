// Recursive
var invertTree = function(root) {
    if (root === null) {
        return root;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// Iterative
var invertTree = function(root) {
    if (root === null) {
        return root;
    }
    var queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        var node = queue.shift();
        var left = node.left;
        node.left = node.right;
        node.right = left;
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    return root;
};
