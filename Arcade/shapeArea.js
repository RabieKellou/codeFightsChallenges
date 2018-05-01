// Task url: https://codefights.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ/description 

function shapeArea(n) {
    /* area : shapeArea 
       add: how many polygones we gonna add to the next iterartion
    */
    var area = 1,
        add = 4; // intializing.. 

    for (i = 2; i <= n; i++) {
        area += add;
        add = i * 4;
    }
    return area
}

// another perspective:
// function shapeArea(n) {
//     return n * n + (n - 1) * (n - 1);
//   }


