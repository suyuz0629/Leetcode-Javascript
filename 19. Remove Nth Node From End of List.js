var removeNthFromEnd = function(head, n) {
    if (!head) {
        return head;
    }
    var dummy = new ListNode(0);
    dummy.next = head;
    var cur = dummy;
    var fast = dummy;
    var count = n;
    while (count--) {
        fast = fast.next;
    }
    while (fast.next) {
        cur = cur.next;
        fast = fast.next;
    }
    cur.next = cur.next.next;
    return dummy.next;
};
