// Task url: https://codefights.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM
function sortByHeight(a) {
    var treeIndex = [];
    var index = -1;
    people = a.filter((el) => {
        index++;
        if (el === -1) {
            treeIndex.push(index);

            return false;
        }
        return true;
    });
    people.sort((el1, el2) => el1 - el2);
    for (i = 0; i < treeIndex.length; i++) {
        people.splice(treeIndex[i], 0, -1)
    }
    return people;
}