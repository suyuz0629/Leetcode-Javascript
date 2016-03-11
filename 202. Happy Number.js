var isHappy = function(n) {
    var obj = {};
    obj[n] = true;
    while (n !== 1) {
        var temp = 0;
        while (n >= 1) {
            temp += Math.pow(Math.floor(n % 10), 2);
            n = Math.floor(n / 10);
        }
        n = temp;
        if (obj[n]) {
            return false;
        }
        obj[n] = true;
    }
    return true;
};
