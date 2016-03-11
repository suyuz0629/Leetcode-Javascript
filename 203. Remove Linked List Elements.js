var removeElements = function(head, val) {
    if (!head) {
        return head;
    }
    var dummy = new ListNode(0);
    dummy.next = head;
    var par = dummy;
    var cur = dummy;
    while (cur) {
        cur = cur.next;
        while (cur && cur.val === val) {
            cur = cur.next;
        }
        par.next = cur;
        par = par.next;
    }
    return dummy.next;
};
