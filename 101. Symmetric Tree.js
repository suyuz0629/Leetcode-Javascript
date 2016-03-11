var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    if (!root.left &&  !root.right) {
        return true;
    }
    if (!root.left || !root.right) {
        return false;
    }
    return same(root.left, root.right);
};

var same = function(left, right){
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return same(left.left, right.right) && same(left.right, right.left);
}
