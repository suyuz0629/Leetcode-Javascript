var isStrobogrammatic = function(num) {
    if (num < 0) {
        return false;
    }
    for (var i = 0; i <= num.length / 2; i++) {
        if (num.charAt(i) === "0") {
            if (num.charAt(num.length - i - 1) !== "0") {
                return false;
            }
        } else if (num.charAt(i) === "1") {
            if (num.charAt(num.length - i - 1) !== "1") {
                return false;
            }
        } else if (num.charAt(i) === "6") {
            if (num.charAt(num.length - i - 1) !== "9") {
                return false;
            }
        } else if (num.charAt(i) === "8") {
            if (num.charAt(num.length - i - 1) !== "8") {
                return false;
            }
        } else if (num.charAt(i) === "9") {
            if (num.charAt(num.length - i - 1) !== "6") {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

var isStrobogrammatic = function(num) {
    if (num < 0) {
        return false;
    }
    // 0-0, 1-1, 6-9, 8-8
    for (var i = 0; i <= num.length / 2; i++) {
        switch (num.charAt(i)){
            case "0":
                if (num.charAt(num.length - i - 1) !== "0") {
                    return false;
                }
                break;
            case "1":
                if (num.charAt(num.length - i - 1) !== "1") {
                    return false;
                }
                break;
            case "6":
                if (num.charAt(num.length - i - 1) !== "9") {
                    return false;
                }
                break;
            case "8":
                if (num.charAt(num.length - i - 1) !== "8") {
                    return false;
                }
                break;
            case "9":
                if (num.charAt(num.length - i - 1) !== "6") {
                    return false;
                }
                break;
            default:
                return false;
        }
    }
    return true;
};
