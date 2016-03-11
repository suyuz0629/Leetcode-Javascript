/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */

// Iterative
var closestValue = function(root, target) {
    var closest = Number.MAX_VALUE;
    var value = 0;
    var current = root;
    while (current) {
        if (closest > Math.abs(current.val-target)) {
            closest = Math.abs(current.val-target);
            value = current.val;
        }

        if (current.val < target) {
            current = current.right;
        } else if (current.val > target) {
            current = current.left;
        } else {
            break;
        }
    }
    return value;
};

// Recursive
var closestValue = function(root, target) {
    if (!root) {
        return 0;
    }
    var suc = closestSuccessor(root, target);
    var pre = closestPredecessor(root, target);

    if (!suc && !pre) {
        return root.val;
    }
    if (!suc) {
        return pre.val;
    }
    if (!pre) {
        return suc.val;
    }
     if (Math.abs(pre.val - target) <= Math.abs(suc.val - target)) {
         return pre.val;
     } else {
         return suc.val;
     }
};

var closestSuccessor = function(root, target) {
    if (!root) {
        return null;
    }
    var cur = root;
    var res = null;
    while (cur !== null) {
        if (cur.val > target) {
      res = cur;
      cur = cur.left;
    } else if (cur.val < target) {
      cur = cur.right;
    } else {
        return cur;
    }
    }
    return res;
};

var closestPredecessor = function(root, target) {
    if (!root) {
        return null;
    }
    var cur = root;
    var res = null;
    while (cur !== null) {
        if (cur.val < target) {
      res = cur;
      cur = cur.right;
    } else if (cur.val > target) {
      cur = cur.left;
    } else {
        return cur;
    }
    }
    return res;
};
