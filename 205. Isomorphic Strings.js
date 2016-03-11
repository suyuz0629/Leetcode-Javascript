var isIsomorphic = function(s, t) {
    if (!s && !t) {
        return true;
    }
    if (!s || !t || s.length !== t.length) {
        return false;
    }
    var sobj = {};
    var tobj = {};
    for (var i = 0; i < s.length; i++) {
        if (!sobj[s.charAt(i)]) {
            sobj[s.charAt(i)] = t.charAt(i);
        } else {
            if (sobj[s.charAt(i)] !== t.charAt(i)) {
                return false;
            }
        }

        if (!tobj[t.charAt(i)]) {
            tobj[t.charAt(i)] = s.charAt(i);
        } else {
            if (tobj[t.charAt(i)] !== s.charAt(i)) {
                return false;
            }
        }
    }
    return true;
};

// Track last index
var isIsomorphic = function(s, t) {
    if (!s && !t) {
        return true;
    }
    if (!s || !t || s.length !== t.length) {
        return false;
    }
    var sobj = {};
    var tobj = {};

    for (var i = 0; i < s.length; i++) {
        if (sobj[s.charAt(i)] !== tobj[t.charAt(i)]) {
            return false;
        }
        // record last inex
        sobj[s.charAt(i)] = i + 1;
        tobj[t.charAt(i)] = i + 1;
    }

    return true;
}
