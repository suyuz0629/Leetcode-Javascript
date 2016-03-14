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
