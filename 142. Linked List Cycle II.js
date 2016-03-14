var detectCycle = function(head) {
    if (!head) {
        return null;
    }
    var slow = head;
    var fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    if (!fast || !fast.next) {
        return null;
    }
    slow = head;
    while (slow) {
        if (slow === fast) {
            return slow;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return null;
};
