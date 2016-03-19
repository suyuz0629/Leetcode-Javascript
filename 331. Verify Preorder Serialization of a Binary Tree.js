var isValidSerialization = function(preorder) {
    var stack = [];
    var order = preorder.split(",");
    for (var num of order) {
        if (num !== "#") {
            stack.push(num);
        } else {
            while (stack.length && stack[stack.length - 1] === "#") {
                stack.pop();
                if (!stack.length) return false;
                stack.pop();
            }
            stack.push("#");
        }
    }
    return stack.pop() === "#" && !stack.length;
};
