// Recursive
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Iterative
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    var parray = [];
    var qarray = [];

    var t = p;

    parray.push(p);
    qarray.push(q);

    while (parray.length === qarray.length && parray.length !== 0) {
        var size = parray.length;
        for (var i = 0; i < size; i++) {
            var pnode = parray.shift();
            var qnode = qarray.shift();
            if (pnode.val !== qnode.val) {
                return false;
            } else {
                if (pnode.left === null || qnode.left === null) {
                    if (pnode.left !== null || qnode.left !== null) {
                        return false;
                    }
                }
                if (pnode.right === null || qnode.right === null) {
                    if (pnode.right !== null || qnode.right !== null) {
                        return false;
                    }
                }
                if (pnode.left !== null) {
                    parray.push(pnode.left);
                    qarray.push(qnode.left);
                }
                if (pnode.right !== null) {
                    parray.push(pnode.right);
                    qarray.push(qnode.right);
                }
            }
        }
    }
    return parray.length === qarray.length;
};
