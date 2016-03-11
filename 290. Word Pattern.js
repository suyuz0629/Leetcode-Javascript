var wordPattern = function(pattern, str) {
    if (!pattern) {
        return false;
    }
    var strings = str.split(" ");
    if (pattern.length !== strings.length) {
        return false;
    }
    var cobj = {};
    var sobj = {};
    for (var i = 0; i < pattern.length; i++) {
        if (cobj[pattern.charAt(i)] !== sobj[strings[i]]) {
            return false;
        }
        cobj[pattern.charAt(i)] = i;
        sobj[strings[i]] = i;
    }
    return true;
};
