var titleToNumber = function(s) {
    if (!s) {
        return 0;
    }
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        result = result * 26 + (s.charCodeAt(i) - 64);
    }
    return result;
};
