function commonCharacterCount(s1, s2) {
    let count = 0;
    s1 = s1.split('');
    s2 = s2.split('');
    while (s1.length && s2.length > 0) {
        const letter = s1.shift();
        const index = s2.indexOf(letter);
        if (index > -1) {
            count++;
            s2.splice(index, 1);
        }
    }
    return count;
}