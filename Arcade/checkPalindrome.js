function checkPalindrome(inputString) {
    middle = inputString.length / 2;
    for (i = 0, j = inputString.length - 1; i < middle, j >= middle; i++, j--) {
        if (inputString[i] !== inputString[j]) {
            return false;
        }
    }
    return true;
}