var lengthOfLastWord = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }
    var length = 0;
    var change = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === " ") {
            change = 1;
        } else {
            if (change === 1) {
                change = 0;
                length = 0;
            }
            length++;
        }
    }
    return length;
};
