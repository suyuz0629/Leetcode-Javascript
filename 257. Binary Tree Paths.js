var result = [];
var binaryTreePaths = function(root) {
    result = []; // as the test case will call this function recursively
                 // have to clean the result array
    if (!root) {
        return result;
    }
    dfs(root, "" + root.val);
    return result;
};

var dfs = function(root, path) {
    if (!root.left && !root.right) {
        result.push(path);
    } else {
        if (root.left) {
            dfs(root.left, path + "->" + root.left.val);
        }
        if (root.right) {
            dfs(root.right, path + "->" + root.right.val);
        }
    }
}
