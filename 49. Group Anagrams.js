var groupAnagrams = function(strs) {
    var map = new Map();
    for (var str of strs) {
        var key = sortString(str);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    var result = [];
    for (var value of map.values()) {
        result.push(value.sort());
    }
    return result;
};

var sortString = function(word) {
    return word.split("").sort().join("");
};
