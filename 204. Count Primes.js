var countPrimes = function(n) {
    var array = new Array(n);
    array.fill(false);
    if (n <= 2) {
        return 0;
    }
    var count = 0;
    for (var i = 2; i < n; i++) {
        if (!array[i]) {
            count++;
            for (var j = 2; i * j < n; j++) {
                array[i * j] = true;
            }
        }
    }
    return count;
};
