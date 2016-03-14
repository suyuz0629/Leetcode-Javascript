var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    var slow = head;
    var fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
