var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    var result = "";
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j].charAt(i) !== strs[0].charAt(i)) {
                return result;
            }
        }
        result += strs[0].charAt(i);
    }
    return result;
};
