// iterative
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    var array = [];
    var result = [];
    var cur = root;
    while (cur || array.length !== 0) {
        if (!cur) {
            cur = array.pop();
            cur = cur.right;
        } else {
            array.push(cur);
            result.push(cur.val);
            cur = cur.left;
        }
    }
    return result;
}

// recursive
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    var array = [];
    rec(root, array);
    return array;
};

var rec = function(root, array) {
    if (!root) {
        return;
    }
    array.push(root.val);
    rec(root.left, array);
    rec(root.right, array);
};
