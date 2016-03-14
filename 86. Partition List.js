// less and not less
var partition = function(head, x) {
    if (!head) {
        return null;
    }
    var s = new ListNode(0);
    var e = new ListNode(0);
    var scur = s;
    var ecur = e;
    var cur = head;
    while (cur) {
        var temp = new ListNode(cur.val);
        if (cur.val < x) {
            scur.next = temp;
            scur =scur.next;
        } else {
            ecur.next = temp;
            ecur = ecur.next;
        }
        cur = cur.next;
    }
    scur.next = e.next;
    return s.next;
};
