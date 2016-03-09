var oddEvenList = function(head) {
    if (!head) {
        return head;
    }
    var odd = head;
    var even = head.next;
    var oddCur = odd;
    var evenCur = even;

    while (evenCur && evenCur.next) {
        oddCur.next = evenCur.next;
        oddCur = oddCur.next;
        evenCur.next = oddCur.next;
        evenCur = evenCur.next;
    }
    oddCur.next = even;

    return odd;
};
