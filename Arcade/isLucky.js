function isLucky(n) {
    n = n.toString();
    var sumOfFirstHalf = n.slice(0, n.length / 2).split('').reduce((a, b) => parseInt(a) + parseInt(b));
    var sumOfSecondHalf = n.slice(n.length / 2).split('').reduce((a, b) => parseInt(a) + parseInt(b));
    return firstHalf === secondHalf;
}

//another without using reduce() and slice()

// function isLucky(n) {
//     var arr = n.toString().split('');
//     var sum1 = sum2 = 0;
//     var half = arr.length / 2;
//     for (i = 0, j = half; i < half, j < arr.length; i++, j++) {
//         sum1 += parseInt(arr[i]);
//         sum2 += parseInt(arr[j]);

//     }
//     return sum1 === sum2;
// }