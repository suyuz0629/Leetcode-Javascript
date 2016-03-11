var groupStrings = function(strings) {
    var result = [];
    var map = new Map();
    for (var string of strings) {
        var code = getOrigin(string);
        if (!map.has(code)) {
            map.set(code, []);
        }
        map.get(code).push(string);
    }
    var value;
    for (value of map.values()) {
        result.push(value.sort());
    }
    return result;
};

var getOrigin = function(string) {
    if (string.length < 2) {
        return 0;
    }
    var origin = "a";
    var distance = string.charCodeAt(0) - 97;
    console.log(distance);
    for (var i = 1; i < string.length; i++) {
        var code = string.charCodeAt(i) - distance;
        if (code < 97) {
            code += 26;
        }
        origin += code.toString();
    }
    return origin;
};
