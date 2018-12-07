function arrayChange(inputArray) {
    let min = 0;
    for (i = 0; i < inputArray.length - 1; i++) {

        while (inputArray[i] >= inputArray[i + 1]) {
            min++;
            inputArray[i + 1] += 1;
        }

    }
    return min;
}