var isUgly = function(num) {
    if (!num) {
        return false;
    }
    while (num !== 1) {
        for (var i of [2, 3, 5]) {
            if (num % i === 0) {
                num /= i;
            } else {
                return false;
            }
        }
    }
    return true;
};
