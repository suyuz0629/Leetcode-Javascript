var merge = function(nums1, m, nums2, n) {
    var index = m + n - 1;
    var i1 = m - 1;
    var i2 = n - 1;
    while (i1 >= 0 && i2 >= 0) {
        if (nums1[i1] <= nums2[i2]) {
            nums1[index--] = nums2[i2--];
        } else {
            nums1[index--] = nums1[i1--];
        }
    }
    if (i2 < 0) {
        return;
    } else {
        while (i2 >= 0) {
            nums1[index--] = nums2[i2--];
        }
    }
};
