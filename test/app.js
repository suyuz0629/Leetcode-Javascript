function ListNode(v) {
    this.val = v;
    this.next = null;
}

var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }

    //Find the middle of the list
    var p1 = head;
    var p2 = head;
    while (p2.next && p2.next.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }

    //Reverse the half after middle  1->2->3->4->5->6 to 1->2->3->6->5->4
    var preMiddle = p1;
    var preCurrent = p1.next;
    while (preCurrent.next) {
        var current = preCurrent.next;
        preCurrent.next = current.next;
        current.next = preMiddle.next;
        preMiddle.next = current;
    }

    //Start reorder one by one  1->2->3->6->5->4 to 1->6->2->5->3->4
    p1 = head;
    p2 = preMiddle.next;
    while (p1 !== preMiddle) {
        preMiddle.next = p2.next;

        p2.next = p1.next;
        p1.next = p2;

        p1 = p2.next;
        p2 = preMiddle.next;
    }
};

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
var l4 = new ListNode(4);
l1.next = l2;
l2.next = l3;
// l3.next = l4;
var result = reorderList(l1);
console.log(result);
