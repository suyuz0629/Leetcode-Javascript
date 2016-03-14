// use the property of complicate bt
var connect = function(root) {
    if (!root) {
        return;
    }
    var cur = root;
    while (cur.left) {
        var c = cur;
        while (c) {
            c.left.next = c.right;
            if (c.next) {
                c.right.next = c.next.left;
            }
            c = c.next;
        }
        cur = cur.left;
    }
};

var connect = function(root) {
    var levelPre, cur = root, lowerHead;
    while (cur) {
        if (cur.left) {
            if (!lowerHead) {
                lowerHead = cur.left;
            }
            if (levelPre) {
                levelPre.next = cur.left;
                levelPre = levelPre.next;
            } else {
                levelPre = cur.left;
            }
        }
        if (cur.right) {
            if (!lowerHead) {
                lowerHead = cur.right;
            }
            if (levelPre) {
                levelPre.next = cur.right;
                levelPre = levelPre.next;
            } else {
                levelPre = cur.right;
            }
        }
        cur = cur.next;
        if (!cur) {
            cur = lowerHead;
            levelPre = null;
            lowerHead = null;
        }
    }
};
