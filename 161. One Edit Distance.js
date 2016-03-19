/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if (Math.abs(s.length - t.length) > 1) {
        return false;
    }
    if (s.length === t.length) {
        return oneMod(s, t);
    } else if (s.length > t.length) {
        return oneDel(s, t);
    } else {
        return oneDel(t, s);
    }
};

var oneDel = function(s, t) {
    for (var i = 0; i < s.length; i++) {
        if (s.substring(0,i) + s.substring(i + 1) === t) {
            return true;
        }
    }
    return false;
}

var oneMod = function (s, t) {
    var diff = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) !== t.charAt(i)) {
            diff++;
        }
    }
    return diff === 1;
}
