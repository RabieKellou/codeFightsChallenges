//The Task : https://codefights.com/arcade/intro/level-4/ZCD7NQnED724bJtjN/description
function addBorder(picture) {
    var top_Bottom = "";
    for (i = 0; i < picture[0].length + 2; i++) {
        top_Bottom += "*";
    }
    picture = picture.map(el => {
        el = el.split('');
        el.unshift("*");
        el.push("*");
        return el.join('');
    });
    picture.unshift(top_Bottom);
    picture.push(top_Bottom);
    return picture;
}