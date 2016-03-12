var compareVersion = function(version1, version2) {
    var a1 = version1.split(".");
    var a2 = version2.split(".");
    var i1 = 0;
    var i2 = 0;
    while (i1 < a1.length && i2 < a2.length) {
        if (parseInt(a1[i1]) < parseInt(a2[i2])) {
            return -1;
        } else if (parseInt(a1[i1]) > parseInt(a2[i2])) {
            return 1;
        } else {
            i1++;
            i2++;
        }
    }
    if (i1 < a1.length) {
        // 1.0 vs 1
        for (; i1 < a1.length;) {
            if (parseInt(a1[i1++]) > 0) {
                return 1;
            }
        }
    } else if (i2 < a2.length) {
        for (; i2 < a2.length;) {
            if (parseInt(a2[i2++]) > 0) {
                return -1;
            }
        }
    }
    return 0;
};
