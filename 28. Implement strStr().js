var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }
    if (!haystack) {
        return -1;
    }
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var count = 0;
        for (var j = 0; j < needle.length; j++) {
            if (haystack.charAt(i + j) !== needle.charAt(j)) {
                break;
            }
            count++;
        }
        if (count === needle.length) {
            return i;
        }
    }
    return -1;
};
