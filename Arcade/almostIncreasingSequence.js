/*Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array... Task-Url:https://codefights.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG/description*/

var removed = 0;

function almostIncreasingSequence(sequence) {
    for (i = 0; i < sequence.length - 1; i++) {
        var diff = sequence[i + 1] - sequence[i];

        if (diff <= 0) {
            if (i >= 1) {
                if (sequence[i + 1] - sequence[i - 1] > 0) {
                    sequence.splice(i, 1);
                } else {
                    sequence.splice(i + 1, 1);
                }
            } else {
                sequence.splice(i, 1);
            }
            removed++;

            var newseq = sequence.slice(i);

            return ((almostIncreasingSequence(newseq)) && removed <= 1)
        }
    }
    return removed <= 1;
}