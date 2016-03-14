var insertionSortList = function(head) {
    if (!head) {
        return null;
    }
    var root = new ListNode(Number.MIN_VALUE);
    var cur = head;
    while (cur) {
        root = insert(root, new ListNode(cur.val));
        cur = cur.next;
    }
    return root.next;
};

var insert = function(head, node) {
    var pre = head;
    var cur = head.next;
    while (cur) {
        if (cur.val >= node.val) {
            node.next = cur;
            pre.next = node;
            return head;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }
    pre.next = node;
    return head;
};
