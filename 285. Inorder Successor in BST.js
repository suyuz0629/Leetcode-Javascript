// iterative
var inorderSuccessor = function(root, p) {
    var re = null;
    while (root) {
        if (root.val <= p.val) {
            root = root.right;
        } else {
            re = root;
            root = root.left;
        }
    }
    return re;
};

// recursive
// var inorderSuccessor = function(root, p) {
//     if (!root) {
//         return null;
//     }
//     if (root.val <= p.val) {
//         return inorderSuccessor(root.right, p);
//     } else {
//         var left = inorderSuccessor(root.left, p);
//         if (!left) {
//             return root;
//         } else {
//             return left;
//         }
//     }
// };
