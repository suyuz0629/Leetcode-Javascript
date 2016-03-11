var isSelfCrossing = function(x) {
    if (!x || x.length < 4) {
        return false;
    }
    for (var i = 0; i < x.length - 3; i++) {
        if (x[i + 1] <= x[i + 3] && x[i] >= x[i + 2]) {
            return true;
        }
        if (i < x.length - 4) {
            if (x[i + 1] == x[i + 3] && x[i] + x[i + 4] >= x[i + 2]) {
                return true;
            }
        }
        if (i < x.length - 5) {
            if (x[i + 3] >= x[i + 1] && x[i + 1] + x[i + 5] >= x[i + 3] && x[i + 2] >= x[i + 4] && x[i] + x[i + 4] >= x[i + 2]) {
                return true;
            }
        }
    }
    return false;
};
