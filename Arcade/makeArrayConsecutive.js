//Task url : https://codefights.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function makeArrayConsecutive(statues) {

    var sorted = statues.sort(function(a, b) { return a - b });
    var length = sorted.length;
    var diffirence = sorted[length - 1] - sorted[0];
    return diffirence + 1 - length;


}