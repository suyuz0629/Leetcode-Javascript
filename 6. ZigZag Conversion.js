var convert = function(s, numRows) {
    var result = "";
    if (s.length < numRows || numRows === 1) {
        return s;
    }
    var row = numRows;
    for (var i = numRows - 1; i >= 0; i--) {
        var set = true;
        for (var j = numRows - i - 1; j < s.length; ) {
            result += s.charAt(j);
            if (i === 0 || i === numRows - 1) {
                j += 2 * (numRows - 1);
            } else {
                if (set) {
                    set = false;
                    j += 2 * i;
                } else {
                    set = true;
                    j += 2 * (numRows - i - 1);
                }
            }
        }
    }
    return result;
};
