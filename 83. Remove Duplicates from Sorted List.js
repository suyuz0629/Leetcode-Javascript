var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    var cur = head;
    while (cur && cur.next) {
        var temp = cur.next;
        while (temp && cur.val === temp.val) {
            temp = temp.next;
        }
        cur.next = temp;
        cur = cur.next;
    }
    return head;
};
