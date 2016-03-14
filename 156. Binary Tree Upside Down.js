var upsideDownBinaryTree = function(root) {
    if (!root) {
        return null;
    }
    if (!root.left) {
        return root;
    }
    var newNode = upsideDownBinaryTree(root.left);
    root.left.left = root.right;
    root.left.right = root;
    root.right = null;
    root.left = null;
    return newNode;
};
