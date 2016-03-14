var reverseKGroup = function(head, k) {
    if (!head) {
        return null;
    }
    var dummy = new ListNode(0);
    dummy.next = head;
    var cur = head;
    var pre = head;
    var par = dummy;
    while (cur) {
        var count = 0;
        while (cur && ++count < k) {
            cur = cur.next;
        }
        if (k === count && cur) {
            var next = cur.next;
            cur.next = null;
            var re = reverse(pre);
            par.next = re;
            par = pre;
            cur = next;
            pre = cur;
        } else {
            par.next = pre;
            return dummy.next;
        }
    }
    return dummy.next;
};

var reverse = function(head, tail) {
    while (head) {
        var next = head.next;
        head.next = tail;
        tail = head;
        head = next;
    }
    return tail;
};
