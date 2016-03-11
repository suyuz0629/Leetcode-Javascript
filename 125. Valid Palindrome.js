var isPalindrome = function(s) {
    if (!s || s.length < 2) {
        return true;
    }
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        while (left < right && !(   (s.charCodeAt(left) >= 65 && s.charCodeAt(left) <= 90) || (s.charCodeAt(left) >= 97 && s.charCodeAt(left) <= 122)   || (s.charCodeAt(left) >= 48 && s.charCodeAt(left) <= 57)   )) {
            left++;
        }

        while (left < right && !(   (s.charCodeAt(right) >= 65 && s.charCodeAt(right) <= 90) || (s.charCodeAt(right) >= 97 && s.charCodeAt(right) <= 122)   || (s.charCodeAt(right) >= 48 && s.charCodeAt(right) <= 57)   )) {
            right--;
        }
        var l = s.charAt(left).toLowerCase();
        var r = s.charAt(right).toLowerCase();
        if (l !== r) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
