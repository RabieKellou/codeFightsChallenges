function areSimilar(arr1, arr2) {
    let swap = [];
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            swap.push([arr1[i], arr2[i]]);
            console.log(swap);

            if (swap.length > 1) {
                swap[1].reverse()
                console.log(swap[0].values !== swap[1].values);
                if (swap[0].values !== swap[1].values || swap.length > 2) {
                    return false;
                }
            }
        }
    }
    return swap.length !== 1;
}

let a1 = [1, 2, 3];
let a2 = [2, 1, 3];
console.log(a1.toString() == a2.toString());

let a = [1, 2, 2];
let b = [2, 1, 1];
// console.log(areSimilar(a1,a2)); 
// console.log(areSimilar(a,b)); 
a = [1, 2, 3]
b = [1, 2, 3]
    //  console.log(areSimilar(a,b)); 

c = [1, 1, 4]
d = [1, 2, 3]

console.log(areSimilar(c, d));