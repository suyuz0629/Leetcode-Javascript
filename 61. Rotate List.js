var rotateRight = function(head, k) {
    if (!head) {
        return head;
    }
    var length = 0, cur = head, pre = head, fast = head, n;
    while (cur) {
        length++;
        cur = cur.next;
    }
    k %= length;
    if (k === 0) {
        return head;
    }
    cur = head;
    n = k;
    while (fast && n-- > 0) {
        fast = fast.next;
    }
    while (fast) {
        fast = fast.next;
        pre = cur;
        cur = cur.next;
    }
    pre.next = null;
    return reverse(reverse(head, reverse(cur)));
};

var reverse = function(root, temp) {
    while (root) {
        var next = root.next;
        root.next = temp;
        temp = root;
        root = next;
    }
    return temp;
}
