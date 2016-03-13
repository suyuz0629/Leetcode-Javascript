// iterative
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    var array = [];
    var result = [];
    var cur = root;
    while (cur || array.length !== 0) {
        if (!cur) {
            cur = array.pop();
            result.push(cur.val);
            cur = cur.right;
        } else {
            array.push(cur);
            cur = cur.left;
        }
    }
    return result;
};

// recursive
// var inorderTraversal = function(root) {
//     if (!root) {
//         return [];
//     }
//     var array = [];
//     rec(root, array);
//     return array;
// };

// var rec = function(root, array) {
//     if (!root) {
//         return;
//     }
//     rec(root.left, array);
//     array.push(root.val);
//     rec(root.right, array);
// };
