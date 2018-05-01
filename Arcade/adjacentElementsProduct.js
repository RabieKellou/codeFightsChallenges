function adjacentElementsProduct(inputArray) {
    var max = inputArray[0] * inputArray[1];
    for (i = 1, j = 2; i < inputArray.length - 1, j < inputArray.length; i++, j++) {
        var product = inputArray[i] * inputArray[j];
        if (product > max) {
            max = product;
        }

    }
    return max;
}