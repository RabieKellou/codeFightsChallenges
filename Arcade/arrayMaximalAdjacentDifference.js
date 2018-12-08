function arrayMaximalAdjacentDifference(inputArray) {
    let max = Math.abs(inputArray[1] - inputArray[0]);
    for (i = 1; i < inputArray.length - 1; i++)
        if (Math.abs(inputArray[i] - inputArray[i + 1]) > max)
            max = Math.abs(inputArray[i] - inputArray[i + 1]);
    return max;

}