// atsk Url: https://codefights.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

function matrixElementsSum(matrix) {
    var sum = 0;
    for (col = 0; col < matrix[0].length; col++) {
        var row = 0;
        while (row < matrix.length && matrix[row][col] !== 0) {
            sum += matrix[row][col];
            row++;
        }
    }
    return sum;
}