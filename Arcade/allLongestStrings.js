function allLongestStrings(inputArray) {
    var sorted = inputArray.sort((a, b) => a.length - b.length);

    return inputArray.filter(x => x.length === sorted[sorted.length - 1].length)
}