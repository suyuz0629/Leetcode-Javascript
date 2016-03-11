var countAndSay = function(n) {
    var result = "1";
    while (--n) {
        result = next(result);
    }
    return result;
};

var next = function(word) {
    var i = 0;
    var result = "";
    while (i < word.length) {
        var count = 1;
        var cur = word.charAt(i);
        while (++i < word.length && cur === word.charAt(i)) {
            count++;
        }
        result += count + cur;
    }
    return result;
}
