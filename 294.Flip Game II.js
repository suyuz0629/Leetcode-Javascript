var canWin = function(s) {
    if (!s) {
        return false;
    }
    for (var i = 0; (i == s.indexOf("++", i)); ) {
        if (i < 0) {
            return false;
        } else {
            var move = s.substring(0, i) + "--" + s.substring(i + 2);
            if (move.indexOf("++", i) < 0) {
                return true;
            }
        }
    }
    return false;
};
