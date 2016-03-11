/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = new Array(rowIndex + 1);
    if (rowIndex < 0) {
        return result;
    }
    result[0] = 1;
    var count = 1;
    while (count !== rowIndex + 1) {
        for (var i = count - 1; i >= 1; i--) {
            // from right to left to avoid using
            // new value to calculate the next index
            result[i] = result[i - 1] + result[i];
        }
        result[count] = 1;
        count++;
    }
    return result;
};
