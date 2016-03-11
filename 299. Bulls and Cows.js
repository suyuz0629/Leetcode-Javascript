// One pass
var getHint = function(secret, guess) {
    var array = new Array(10);
    array.fill(0);
    var bulls = 0;
    var cows = 0;
    var i = 0;
    for (; i < secret.length; i++) {
        if (secret.charAt(i) === guess.charAt(i)) {
            bulls++;
        } else {
            if (array[secret.charCodeAt(i) - 48] < 0) {
                cows++;
            }
            if (array[guess.charCodeAt(i) - 48] > 0) {
                cows++;
            }
            array[secret.charCodeAt(i) - 48]++;
            array[guess.charCodeAt(i) - 48]--;
        }
    }
    return bulls + "A" + cows + "B";
};

// Two pass
var getHint = function(secret, guess) {
    var array = new Array(10);
    array.fill(0);
    var bulls = 0;
    var cows = 0;
    var i = 0;
    for (; i < secret.length; i++) {
        if (secret.charAt(i) === guess.charAt(i)) {
            bulls++;
        } else {
            array[secret.charCodeAt(i) - 48]++;
        }
    }
    for (i = 0; i < secret.length; i++) {
        if (secret.charAt(i) !== guess.charAt(i)) {
            if (array[guess.charCodeAt(i) - 48] !== 0) {
                cows++;
                array[guess.charCodeAt(i) - 48]--;
            }
        }
    }
    return bulls + "A" + cows + "B";
};
