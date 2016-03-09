var isAnagram = function(s, t) {
    if (s === null || t === null) {
        return s === t;
    }
    if (s.length !== t.length) {
        return false;
    }
    if (s === "" || t === "") {
        return s === t;
    }
    var array = new Array(128);
    array.fill(0);
    var i = 0;
    for (; i < s.length; i++) {
        var sindex = s.charCodeAt(i);
        var tindex = t.charCodeAt(i);
        array[sindex]++;
        array[tindex]--;
    }
    i = 0;
    for (; i < array.length; i++) {
        if (array[i] !== 0) {
            return false;
        }
    }
    return true;
};
