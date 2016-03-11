var countPrimes = function(n) {
    var result = n;
    var set = new Set();
    for (var i = 2; i < n; i++) {
        if (!set.has(i) && isPrime(i)) {
            var temp = i;
            while (temp * i < n) {
                set.add(temp * i);
                temp *= i;
            }
        }
    }
    return n - set.size - 2;
};
var isPrime = function(num) {
    if (num == 2) {
        return true;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(countPrimes(7));

// 2, 3, 5
