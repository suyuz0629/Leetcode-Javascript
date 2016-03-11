var generatePossibleNextMoves = function(s) {
    var result = [];
    if (!s) {
        return result;
    }

    for (var i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) == "+" && s.charAt(i + 1) == "+") {
            result.push(s.substring(0, i) + "--" + s.substring(i+2, s.length));
        }
    }
    return result;
};

