function ListNode(val) {
    this.val = val;
    this.next = null;
}

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
            var re = reverse(pre, next);
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

var reverse = function(head) {
    var tail = null;
    while (head) {
        var next = head.next;
        head.next = tail;
        tail = head;
        head = next;
    }
    return tail;
};

// var l3 = new ListNode(0);
var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
l1.next = l2;
l2.next = l3;
// l2.next = l1;
var l = reverseKGroup(l1, 2);
console.log(l);
