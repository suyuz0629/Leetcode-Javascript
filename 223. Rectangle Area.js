var computeArea = function(A, B, C, D, E, F, G, H) {
    var base = (D - B) * (C - A) + (H - F) * (G - E);
    var maxL = Math.max(A, E);
    var minR = Math.min(C, G);
    var maxB = Math.max(B, F);
    var minT = Math.min(D, H);
    if (maxL < minR && maxB < minT) {
        base -= (minR - maxL) * (minT - maxB);
    }
    return base;
};
