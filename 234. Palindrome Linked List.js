var globalhead;
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }
    globalhead = head;
    var fast = head;
    var slow = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    var go = isSame(slow);
    return go !== null;
};

var isSame = function(p) {
    if (!p) {
        return globalhead;
    } else {
        var newQ = isSame(p.next);
        if (!newQ || newQ.val !== p.val) {
            return null;
        } else {
            return newQ.next;
        }
    }
};
