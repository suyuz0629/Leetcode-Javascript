var reverseBetween = function(head, m, n) {
    if (!head) {
        return head;
    }
    if (m == n) {
        return head;
    }
    var dummy = new ListNode(0);
    dummy.next = head;
    var close = dummy;
    var far = dummy;
    while (--m) {
        close = close.next;
    }
    while (n--) {
        far = far.next;
    }
    var cutHead = close.next;
    close.next = null;
    var tail = far.next;
    far.next = null;
    while (cutHead) {
        var next = cutHead.next;
        cutHead.next = tail;
        tail = cutHead;
        cutHead = next;
    }
    close.next = tail;
    return dummy.next;
};
